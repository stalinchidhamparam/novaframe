import React from 'react'
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate()
  return (
    <motion.div
          className="text-center py-20 px-8 bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-blue-500/10 rounded-3xl border border-pink-500/20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              className="inline-block mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Zap className="text-blue-500 mx-auto" size={70} />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's create something extraordinary together. Schedule your free consultation today and discover how exceptional branding can elevate your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:from-blue-600 hover:to-blue-600 transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { navigate('/contact') }}
              >
                Get Started Now
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { navigate('/package') }}
              >
                View Pricing Plans
              </motion.button>
            </div>
          </div>
        </motion.div>
  )
}

export default Navigation