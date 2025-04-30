import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      learnMore: "LEARN MORE",
      iconBg: "bg-indigo-50",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      learnMore: "LEARN MORE",
      iconBg: "bg-amber-50",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      learnMore: "LEARN MORE",
      iconBg: "bg-red-50",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      learnMore: "LEARN MORE",
      iconBg: "bg-cyan-50",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">
              Future of support with new shape
            </h2>
            <p className="text-gray-600 mb-8">
              Discuss your goals, determine success metrics, identify problems
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">UX design content strategy</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">Development bring</span>
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Get started
            </button>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className={`mb-6 p-4 ${service.iconBg} rounded-xl w-fit`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href="#" 
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {service.learnMore}
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

export default ServicesSection; 