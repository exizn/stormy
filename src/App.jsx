import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import Schedule from "./components/Schedule";
import Statistics from "./components/Statistics";
import Pricing from "./components/Pricing";
import ServicesSection from "./sections/ServicesSection";
import TestimonialSection from "./sections/TestimonialSection";
import NewsletterSection from "./sections/NewsletterSection";
import FooterSection from "./sections/FooterSection";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add smooth scrolling to the whole document
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <div className="space-y-20">
          <Hero />
          <CompanyLogo />  
          
          <Schedule />
          <Statistics />
          <Pricing />
          <ServicesSection />
          <TestimonialSection />
          <NewsletterSection />
          <FooterSection />
        </div>
      </motion.div>
    </main>
  );
}

export default App;
