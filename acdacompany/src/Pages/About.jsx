import React from "react";

export default function AboutACDA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2E] via-[#060F3F] to-[#020617] text-white">
      {/* About Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-blue-600/10 text-blue-400 text-xs tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            EST. 2024
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            About <span className="text-blue-500">ACDA</span>
          </h1>

          <p className="text-gray-400 max-w-lg mx-auto text-base md:text-lg mb-10">
            "Empowering digital growth through visionary engineering and
            human-centric design."
          </p>

          <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-3 rounded-full text-sm font-medium shadow-lg shadow-blue-600/30">
            Our Story
          </button>
        </div>
      </section>

      {/* Journey Section - Image Left, Content Right */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT - Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20">
                <img
                  src="/about-journey.png"
                  alt="ACDA Journey"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* RIGHT - Content */}
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
                The Journey
              </span>

              <h2 className="mt-4 text-4xl font-extrabold text-white leading-tight">
                Bridging the gap between vision <br /> and reality.
              </h2>

              <p className="mt-6 text-gray-400 text-base leading-relaxed">
                Founded in the heart of the digital revolution, ACDA began with a
                single mission: to redefine how technology interacts with business
                goals. We didn't just want to build software; we wanted to craft
                digital legacies.
              </p>

              <p className="mt-4 text-gray-400 text-base leading-relaxed">
                What started as a three-person engineering hub has evolved into a
                powerhouse of innovators. Today, we help startups and enterprises
                navigate the complexities of the modern tech stack.
              </p>

              {/* STATS */}
              <div className="mt-10 flex gap-10">
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">150+</h3>
                  <p className="text-sm text-gray-400 mt-1">Projects Done</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">12</h3>
                  <p className="text-sm text-gray-400 mt-1">Global Awards</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">99%</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
     
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* NORTH STAR */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our North Star
          </h2>
          <p className="mt-3 text-gray-400 text-sm">
            Defining the path we take and the legacy we leave.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
              👁️
            </div>
            <h3 className="text-lg font-semibold text-white">Our Vision</h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              To be the global catalyst for digital transformation, where
              visionary engineering meets impactful solutions to solve the
              world’s most complex challenges.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
              🚀
            </div>
            <h3 className="text-lg font-semibold text-white">Our Mission</h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Delivering excellence in every line of code while fostering a
              culture of continuous innovation, ensuring our clients stay ahead
              in an ever-evolving landscape.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Core Values
          </h2>
          <p className="mt-3 text-gray-400 text-sm">
            The DNA of our engineering culture.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Innovation",
              desc: "Always pushing boundaries and exploring the next frontier of tech.",
              icon: "💡",
            },
            {
              title: "Quality",
              desc: "Uncompromising excellence in architecture, design, and code.",
              icon: "🏆",
            },
            {
              title: "Trust",
              desc: "Building lasting partnerships through transparency and reliability.",
              icon: "🤝",
            },
            {
              title: "Growth",
              desc: "Scaling success for our clients and ourselves through strategic agility.",
              icon: "📈",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition"
            >
              <div className="w-11 h-11 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white mb-4">
                {item.icon}
              </div>
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-blue-800 p-16 text-center shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to build the future?
          </h2>

          <p className="mt-4 text-blue-100 text-sm md:text-base max-w-xl mx-auto">
            Let’s discuss how ACDA can accelerate your digital growth through
            precision engineering.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition"
            >
              Contact Us Today
            </a>
          </div>
        </div>

      </div>
    </section>
 

    </div>
  );
}