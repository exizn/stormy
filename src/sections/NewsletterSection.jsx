import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const NewsletterSection = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full py-20 px-4"
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="bg-blue-600 rounded-[32px] p-12 md:p-16 max-w-7xl mx-auto overflow-hidden relative"
      >
        {/* Background gradient overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500 to-transparent" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <motion.h2 
              variants={fadeIn('right', 0.4)}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Subscribe newsletter
            </motion.h2>
            <motion.p 
              variants={fadeIn('right', 0.5)}
              className="text-blue-100"
            >
              Best cooks and best delivery guys all at your service. Hot tasty food
            </motion.p>
          </div>

          <motion.div 
            variants={fadeIn('left', 0.6)}
            className="flex w-full md:w-auto gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-gray-600 bg-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              Discover <span className="text-xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NewsletterSection; 