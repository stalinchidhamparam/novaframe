import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FloatingSocialButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-20 right-6 flex flex-col items-end z-50 gap-3">
      {/* Social Icons */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/919345679266"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white p-3 rounded-full shadow hover:bg-green-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.937 11.937 0 0012 0C5.373 0 0 5.373 0 12c0 2.084.535 4.043 1.553 5.807L0 24l6.441-1.536A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.243-6.197-3.48-8.52zM12 22.004a9.985 9.985 0 01-5.202-1.435l-.37-.222-3.823.911.97-3.723-.242-.38A9.976 9.976 0 012.003 12C2.003 6.485 6.485 2.003 12 2.003S21.997 6.485 21.997 12 17.515 22.004 12 22.004zm5.5-7.448l-2.483-1.106a.717.717 0 00-.7.06l-.948.647a6.556 6.556 0 01-3.133-3.134l.647-.947a.715.715 0 00.06-.701L9.444 6.92a.715.715 0 00-1.01-.349c-1.137.63-1.878 1.827-1.878 3.168 0 1.048.274 2.07.794 2.973 1.23 2.136 3.23 3.737 5.597 4.47.429.134.874.203 1.323.203 1.253 0 2.466-.385 3.461-1.109a.715.715 0 00-.23-1.32z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white p-3 rounded-full shadow hover:bg-pink-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75a3.25 3.25 0 013.25-3.25h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5A3.25 3.25 0 014.5 16.25v-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a.75.75 0 100 1.5.75.75 0 000-1.5z" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white p-3 rounded-full shadow hover:bg-red-700 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 15l5.19-3L10 9v6zm12-3c0-1.27-.11-2.55-.32-3.8-.22-1.25-.89-2.34-1.82-3.21a5.47 5.47 0 00-3.38-1.2H7.52a5.47 5.47 0 00-3.38 1.2A5.96 5.96 0 002.32 8.2 30.79 30.79 0 002 12c0 1.27.11 2.55.32 3.8.22 1.25.89 2.34 1.82 3.21a5.47 5.47 0 003.38 1.2h9.28c1.22 0 2.42-.41 3.38-1.2a5.96 5.96 0 001.82-3.21c.21-1.25.32-2.53.32-3.8z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:your@email.com"
          className=" text-white p-3 rounded-full shadow hover:bg-blue-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v16H4V4zm16 0L4 20M4 4l16 16" />
          </svg>
        </a>

        {/* Phone */}
        <a
          href="tel:+919345679266"
          className=" text-white p-3 rounded-full shadow hover:bg-indigo-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a16 16 0 0016 16h2a1 1 0 001-1v-3a1 1 0 00-1-1h-4a1 1 0 00-1 .9 11 11 0 01-8.9-8.9A1 1 0 007 6V2a1 1 0 00-1-1H3a1 1 0 00-1 1v3z" />
          </svg>
        </a>
      </div>

      {/* Toggle Button */}
      <button
      onClick={toggleButtons}
      className="text-black bg-white p-3 rounded-full hover:cursor-pointer hover:text-black hover:bg-white/50 transition duration-300"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.svg
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 25"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </motion.svg>
        ) : (
          <motion.svg
            key="plus"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
    </div>
  );
};

export default FloatingSocialButtons;
