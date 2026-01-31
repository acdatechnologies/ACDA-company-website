import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="max-w-8xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-[#0B122E] via-[#0E163A] to-[#0B122E] px-6 py-3 shadow-lg border border-white/10">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.3 7 12 12 20.7 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
          </div>
          <span className="font-semibold text-white text-sm">ACDA</span>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <Link to="/" className="hover:text-white">Home</Link>         
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/services" className="hover:text-white">Services</Link>
        <Link to="/contacts" className="hover:text-white">Contacts</Link>
         
        </div>


        {/* Right Button */}
        <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-full text-sm font-medium">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Header;