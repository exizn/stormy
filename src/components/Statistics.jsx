import React from "react";

const Statistics = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <span className="text-emerald-500 font-semibold uppercase tracking-wider">MONITOR</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Introducing best mobile carousels
            </h2>
            <p className="text-gray-600 mb-6">
              Before the ship is really back. Round, round, all around the world.
              Round, all around the world. Round, all around the world.
            </p>
            <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
              Learn more about monitoring →
            </a>
          </div>

          {/* Right Content - Dashboard Cards */}
          <div className="w-full md:w-1/2 relative">
            {/* Main Blue Card */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl w-full max-w-md mx-auto relative z-20">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl">Discover new</h3>
                <span className="text-xl">ⓘ</span>
              </div>
              
              {/* Progress Circle */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="16"
                    fill="none"
                    className="text-blue-700"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#4ADE80"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray="553"
                    strokeDashoffset="147"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">73.4%</span>
                </div>
              </div>
              
              <h4 className="text-xl font-medium mb-2">Latest Products</h4>
              <p className="text-blue-200 text-sm mb-8">
                We design solutions for digital interactions
              </p>
              
              <div className="flex justify-between items-center border-t border-blue-500/30 pt-4">
                <span>Wallet Balance</span>
                <div className="flex items-center gap-2">
                  <span>Fee</span>
                  <span>+$</span>
                </div>
              </div>
            </div>

            {/* Background Card - Code Editor */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-10 w-64">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Background Card - Chart */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-10">
              <div className="flex items-end gap-2 h-24">
                <div className="w-4 h-16 bg-cyan-400 rounded-t-lg"></div>
                <div className="w-4 h-20 bg-cyan-400 rounded-t-lg"></div>
                <div className="w-4 h-12 bg-cyan-400 rounded-t-lg"></div>
                <div className="w-4 h-18 bg-cyan-400 rounded-t-lg"></div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-30">
              ←
            </button>
            <button className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-30">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics; 