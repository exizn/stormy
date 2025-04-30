import React, { useState } from "react";

const Pricing = () => {
  const [productCount, setProductCount] = useState(50);
  
  const calculatePrice = (isStarter) => {
    const basePrice = isStarter ? 80 : 150;
    const pricePerProduct = isStarter ? 80 : 150;
    return basePrice + (pricePerProduct * (productCount - 1));
  };

  const handleSliderChange = (e) => {
    setProductCount(parseInt(e.target.value));
  };

  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-[400px] hover:shadow-xl transition-shadow">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">${calculatePrice(true)}</span>
              <span className="text-gray-600 ml-2">/mo</span>
            </div>
          </div>
          
          {/* Business Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-[400px] hover:shadow-xl transition-shadow">
            <h3 className="text-xl text-gray-600 mb-4">Business</h3>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">${calculatePrice(false)}</span>
              <span className="text-gray-600 ml-2">/mo</span>
            </div>
          </div>
        </div>
        
        {/* Products Slider */}
        <div className="max-w-xl mx-auto mb-16">
          <p className="text-center text-gray-600 mb-4">{productCount} products</p>
          <div className="relative w-full">
            <input
              type="range"
              min="1"
              max="50"
              value={productCount}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2563EB ${(productCount/50)*100}%, #E5E7EB ${(productCount/50)*100}%)`
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>1</span>
              <span>50</span>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <p className="text-xl mb-4">Ready to get started?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 