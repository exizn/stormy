import React, { useState } from "react";
import { testimonials } from "../assets/data";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 < 0 ? testimonials.length - 3 : prev - 3));
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          What our happy client say
        </h2>
        <p className="text-gray-600 text-center mb-16">
          Things that make it the best place to start trading
        </p>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-1 bg-white rounded-xl p-8 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <div className="flex text-blue-500 mb-2">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 