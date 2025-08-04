import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../utils/Navigation';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationLink = Navigation();

  const HoverLink = ({ to, label }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative w-full flex justify-center"
    >
      <Link
        to={to}
        onClick={() => setIsMenuOpen(false)}
        className="inline-block border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 text-center"
      >
        {label}
      </Link>
    </motion.div>
  );

  return (
    <>
      {/* Toggle Button - moved to right side */}
      <div className="fixed top-4 right-4 z-[999]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 text-white bg-black/80 px-4 py-2 rounded-full shadow-lg backdrop-blur-md text-sm sm:text-base"
        >
          <div className="w-5 h-5">
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Top Navbar */}
      <nav className="w-full px-6 py-4 top-0 bg-black text-white flex items-center justify-between fixed z-30" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {/* Brand Left Side */}
          <Link
            to="/"
            className="tracking-wide flex font-semibold items-center text-lg sm:text-xl font-lubrifont"
          >
          <img src={logo} className="w-8 mr-2" alt="NovaFrames Logo" />
            NovaFrames
          </Link>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu-bg"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black text-white px-4 py-8 sm:px-8 sm:py-12 flex flex-col items-center justify-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 w-full max-w-6xl px-4 sm:px-8 text-left z-10 mt-6 md:mt-12"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } },
              }}
              initial="hidden"
              animate="show"
            >
              {navigationLink.map((section) => (
                <motion.div
                  key={section.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <h3 className="text-base text-gray-400 uppercase mb-4 tracking-widest text-center">
                    {section.title}
                  </h3>
                  <div className="flex flex-col items-center gap-4 text-xl sm:text-2xl font-semibold">
                    {section.items.map((link) => (
                      <HoverLink key={link.label} to={link.to} label={link.label} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center text-base sm:text-sm text-gray-300 px-4 z-10"
            >
               Let’s build something{' '}
              <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">
                amazing
              </span>{' '}
              together.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
