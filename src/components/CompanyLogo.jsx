import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import ScrollText from "./ScrollText";
import '../App.css';
const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="w-full overflow-hidden container mx-auto py-20 flex flex-col items-center">
      <div className="w-320 shrink-0 px-2 text-gray-500 border-l-4 border-blue-500 bg-white py-2 z-9 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex animate-marquee whitespace-nowrap my-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="mx-12 h-7 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt=""
            className="mx-12 h-7 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
      <ScrollText />
    </div>
  );
};

export default CompanyLogo;