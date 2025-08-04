import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-0"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')",
        }}
      ></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 py-24">
        <h2
        style={{ fontFamily: 'Roboto, sans-serif' }}
        className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Our Philosophy
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          We believe that great design is not just about aesthetics—it's about creating meaningful
          connections between brands and their audiences. Every pixel, every line of code, and every
          strategic decision is made with purpose.
        </p>

        {/* Animated Quote Box */}
        <motion.div
          className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-200 italic mb-6">
            "True innovation lives where code meets creativity, strategy meets story, and every pixel has a purpose."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
