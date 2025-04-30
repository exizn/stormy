import React from "react";
import { services } from "../assets/data";

const Services = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold mb-4">
              Future of support with new shape
            </h2>
            <p className="text-gray-600 mb-6">
              Discuss your goals, determine success metrics, identify problems
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                UX design content strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Development bring
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
              Get started
            </button>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="mb-4 p-3 bg-gray-50 w-fit rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href={service.link} className="text-blue-600 font-semibold">
                    LEARN MORE
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 