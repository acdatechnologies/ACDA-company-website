import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 mt-20 md:mt-24 space-y-6">
      <span className="mb-6 px-4 py-1 rounded-full bg-blue-600/10 text-[#1337ec] text-xs tracking-wide">
        • NOW SCALING DIGITAL STARTUPS
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
        ACDA – Anything <br />
        <span className="text-[#1337ec]">Can Do Anyone.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-gray-400 text-sm md:text-base">
        Empowering your vision with cutting-edge web development, data-driven
        marketing, and iconic branding. Experience digital transformation at its peak.
      </p>

      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-full font-medium text-sm">
          Get Free Consultation →
        </button>
        <button className="bg-white/5 hover:bg-white/10 transition px-6 py-3 rounded-full font-medium text-sm border border-white/10">
          View Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;