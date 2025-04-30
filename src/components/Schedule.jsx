import React from "react";
import stats from "../assets/stats.webp"

const Schedule = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img 
              src={stats} 
              alt="Schedule Dashboard" 
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2">
          <span className="text-orange-500 font-semibold tracking-wider">SCHEDULE</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Streamline Your Business<br />
            With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Take control of your time and boost productivity with our intelligent scheduling
            system. Automate appointments, manage team availability, and deliver
            exceptional customer experiences through seamless calendar management.
          </p>
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-2 font-medium">
            Explore scheduling features →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Schedule; 