// NeonCursorTrail.jsx
import React, { useEffect, useRef } from "react";

const NeonCursorTrail = ({ containerRef }) => {
  const prevPosRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MAX_LINES = 50;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (prevPosRef.current) {
        const [prevX, prevY] = prevPosRef.current;

        const line = document.createElement("div");
        line.className = "absolute pointer-events-none";

        const length = Math.hypot(x - prevX, y - prevY);
        const angle = Math.atan2(y - prevY, x - prevX) * (180 / Math.PI);

        // Tailwind blue‑600 = rgb(37, 99, 235)
        Object.assign(line.style, {
          left: `${prevX}px`,
          top: `${prevY}px`,
          width: `${length}px`,
          height: "2px",
          background:
            "linear-gradient(to right, rgba(37,99,235,0.9), rgba(37,99,235,0.4))",
          transform: `rotate(${angle}deg)`,
          transformOrigin: "0 50%",
          borderRadius: "2px",
          boxShadow: "0 0 8px rgba(37,99,235,0.7)",
          zIndex: 50,
          opacity: "1",
          transition: "opacity 0.4s ease-out",
        });

        container.appendChild(line);
        linesRef.current.push(line);

        // Fade and remove after delay
        setTimeout(() => {
          line.style.opacity = "0";
          setTimeout(() => {
            if (container.contains(line)) container.removeChild(line);
          }, 400);
        }, 10);

        // Keep line count within max
        if (linesRef.current.length > MAX_LINES) {
          const old = linesRef.current.shift();
          if (container.contains(old)) container.removeChild(old);
        }
      }

      prevPosRef.current = [x, y];
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return null;
};

export default NeonCursorTrail;