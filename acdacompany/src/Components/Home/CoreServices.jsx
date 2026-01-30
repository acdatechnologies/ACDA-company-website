import React from "react";

const CoreServices = () => {
  const services = [
    {
      id: 1,
      icon: "</>",
      title: "Web Development",
      description: "High-performance, scalable web applications built with React, Next.js, and modern cloud architecture.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      icon: "📊",
      title: "Digital Marketing",
      description: "Targeted, data-driven strategies using SEO, SEM, and social performance to scale your digital presence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      icon: "✦",
      title: "Branding",
      description: "Identity and visual storytelling that resonates with your audience and builds lasting brand equity.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="mt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm text-blue-500 font-medium tracking-widest mb-3">
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Core Services
            </h2>
          </div>
          <p className="max-w-md text-gray-400 text-sm">
            We combine technical excellence with creative strategy to deliver
            results that move the needle for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-blue-500 text-xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6">
                {service.description}
              </p>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;