import React, { useEffect, useState } from "react";

const ScrollText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById("scroll-text").offsetTop;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="scroll-text"
      className={`w-full bg-white py-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-left md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-purple-600 font-semibold mb-2">ACHIEVE MORE</h3>
          <h2 className="text-4xl font-bold">Purpose of a convoy is to keep your team</h2>
        </div>
        <div className="flex flex-col md:flex-row md:w-2/3 justify-between">
          <div className="flex items-start mb-4 md:mb-0">
            <div className="w-3 h-3 bg-purple-600 rounded-full mt-1 mr-3"></div>
            <div>
              <h4 className="font-semibold">Built for impact</h4>
              <p className="text-gray-600">We identify and nurture a truly diverse team of designers, developers and marketers</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-red-600 rounded-full mt-1 mr-3"></div>
            <div>
              <h4 className="font-semibold">In sync with you</h4>
              <p className="text-gray-600">We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-4">How can we help your business?</h2>
      <p className="text-center text-gray-600 mb-12">
        When you resell besnik, you build trust and increase
      </p>
      <div className="flex justify-center gap-16">
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-[30px] border-blue-100 mb-4 mx-auto">
            <span role="img" aria-label="magnifying glass" className="text-2xl">🔍</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Find out what you need</h3>
          <p className="text-gray-600">We present you a proposal and discuss nitty-gritty like</p>
        </div>
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-[30px] border-gray-200 mb-4 mx-auto">
            <span role="img" aria-label="gear" className="text-2xl">⚙️</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Work out the details</h3>
          <p className="text-gray-600">Communication protocols apart from engagement models</p>
        </div>
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-[30px] border-red-100 mb-4 mx-auto">
            <span role="img" aria-label="rocket" className="text-2xl">🚀</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">We get to work fast</h3>
          <p className="text-gray-600">Protocols apart from engage models, pricing billing</p>  
        </div>
      </div>
    </div>
  );
};

export default ScrollText; 