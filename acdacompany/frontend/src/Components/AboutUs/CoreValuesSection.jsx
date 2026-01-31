export default function CoreValuesSection() {
  const coreValues = [
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
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* CORE VALUES */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Core Values
          </h2>
          <p className="mt-3 text-gray-400 text-sm">
            The DNA of our engineering culture.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coreValues.map((item, i) => (
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
  );
}