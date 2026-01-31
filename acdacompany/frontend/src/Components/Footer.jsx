import React from "react";

const Footer = () => {
  const services = ["Web Development", "Digital Marketing", "Brand Identity", "Cloud Solutions"];
  const company = ["Our Process", "Portfolio", "Careers", "Blog"];
  const socialIcons = ["🌐", "🐦", "💼"];

  return (
    <footer className="mt-32 bg-gradient-to-b from-[#050812] to-black px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-lg font-semibold">ACDA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Leading the future of digital product development.
              We turn complex ideas into seamless user experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {company.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest in tech.
            </p>
            <div className="flex items-center bg-white/5 rounded-full px-4 py-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent flex-1 text-sm outline-none text-white placeholder-gray-500"
              />
              <button className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 pb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 ACDA Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-gray-400">
            {socialIcons.map((icon, index) => (
              <span key={index} className="cursor-pointer hover:text-white">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;