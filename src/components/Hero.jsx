import React from "react";
import heroImage from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container mx-auto flex flex-col md:flex-row pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* left */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
          variants={fadeIn('right', 0.2)}
          className="flex w-fit items-center gap-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group"
        >
          <span className="text-blue-600 group-hover:scale-100 transition-transform">
            ★
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </motion.div>

        <motion.h1
          variants={fadeIn('right', 0.4)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          We boost the growth for{" "}
          <span className="text-blue-600 relative">
            Startup Company{" "}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn('right', 0.6)}
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Get the most accurate leads, sales people training and conversions,
          tools and more - all within the same one billing.
        </motion.p>

        <motion.div
          variants={fadeIn('right', 0.8)}
          className="flex gap-3 max-w-md"
        >
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300"
          >
            →
          </motion.button>
        </motion.div>
      </div>

      {/* right */}
      <motion.div
        variants={fadeIn('left', 0.5)}
        className="w-full md:w-1/2"
      >
        <div className="relative">
          <img
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
            src={heroImage}
            alt="hero Image"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;