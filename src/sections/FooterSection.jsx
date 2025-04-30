import React from "react";

const FooterSection = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span className="font-bold">The Next Design</span>
            </div>
            <p className="text-gray-600 mb-6">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">f</a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">t</a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">in</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GetHelp */}
          <div>
            <h3 className="font-bold mb-4">GetHelp</h3>
            <ul className="space-y-3">
              {footerLinks.getHelp.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 