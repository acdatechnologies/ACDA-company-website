export default function JourneySection() {
  return (
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
  );
}