import React from "react";
import { motion } from "framer-motion";

const AnimatedLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
  </div>
  );
};

export default AnimatedLoading;
