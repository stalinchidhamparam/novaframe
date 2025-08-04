import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function TravelingMergingBalls() {
  const ball1 = useAnimation();
  const ball2 = useAnimation();

  // Define 4 corner points (loop path)
  const points = [
    { x: '20%', y: '30%' },
    { x: '70%', y: '30%' },
    { x: '70%', y: '70%' },
    { x: '20%', y: '70%' },
  ];

  // Animation logic for pair merging & traveling to each point
  useEffect(() => {
    let index = 0;

    const animateLoop = async () => {
      while (true) {
        const center = points[index];
        const offset = 40; // how far apart the balls start and end

        // Animate towards each other (merge)
        await Promise.all([
          ball1.start({
            x: `calc(${center.x} - ${offset}px)`,
            y: center.y,
            transition: { duration: 1.2, ease: 'easeInOut' },
          }),
          ball2.start({
            x: `calc(${center.x} + ${offset}px)`,
            y: center.y,
            transition: { duration: 1.2, ease: 'easeInOut' },
          }),
        ]);

        // Hold merged state briefly
        await new Promise((resolve) => setTimeout(resolve, 600));

        // Move apart again
        await Promise.all([
          ball1.start({
            x: `calc(${center.x} - ${offset * 2}px)`,
            y: center.y,
            transition: { duration: 1.2, ease: 'easeInOut' },
          }),
          ball2.start({
            x: `calc(${center.x} + ${offset * 2}px)`,
            y: center.y,
            transition: { duration: 1.2, ease: 'easeInOut' },
          }),
        ]);

        // Travel to next position
        index = (index + 1) % points.length;
      }
    };

    animateLoop();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ball 1 */}
      <motion.div
        className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 blur-3xl opacity-40 mix-blend-lighten"
        animate={ball1}
        style={{ top: '60%', left: '20%' }}
      />

      {/* Ball 2 */}
      <motion.div
        className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 blur-3xl opacity-40 mix-blend-lighten"
        animate={ball2}
        style={{ top: '60%', left: '25%' }}
      />
      {/* Ball 1 */}
      <motion.div
        className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 blur-3xl opacity-40 mix-blend-lighten"
        animate={ball1}
        style={{ top: '60%', left: '40%' }}
      />

      {/* Ball 2 */}
      <motion.div
        className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 blur-3xl opacity-40 mix-blend-lighten"
        animate={ball2}
        style={{ top: '60%', left: '45%' }}
      />
    </div>
  );
}
