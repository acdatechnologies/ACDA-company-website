import React from "react";

const WhyChoose = () => {
  const reasons = [
    {
      id: 1,
      icon: "⚡",
      title: "Rapid Execution",
      description: "From concept to production in weeks, not months."
    },
    {
      id: 2,
      icon: "👥",
      title: "Expert Team",
      description: "Top 1% developers and creative directors at your disposal."
    },
    {
      id: 3,
      icon: "✔️",
      title: "Proven Results",
      description: "Over 200+ successful launches for Fortune 500 companies."
    },
    {
      id: 4,
      icon: "🎧",
      title: "24/7 Support",
      description: "A dedicated success manager for every single account."
    }
  ];

  return (
    <section className="mt-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why Global Brands Choose ACDA
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mb-16">
          We don't just build products; we build partnerships. Our process is
          designed for speed, scale, and uncompromising quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;