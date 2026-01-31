export default function NorthStarSection() {
  return (
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
              world's most complex challenges.
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
      </div>
    </section>
  );
}