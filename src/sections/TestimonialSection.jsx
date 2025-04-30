import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          What our happy client say
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-center mb-16"
        >
          Things that make it the best place to start trading
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <motion.div
                  key={`${testimonial.id}-${offset}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <motion.div 
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: offset * 0.1 }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex text-blue-500 mb-2"
                    >
                      {Array(5).fill('★').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50"
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50"
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 