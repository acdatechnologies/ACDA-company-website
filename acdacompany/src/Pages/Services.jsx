export default function Services() {
  return (
    <div className="py-32">
      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Services
        </h1>

        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Transforming ideas into digital reality with cutting-edge technology
          and strategic marketing solutions.
        </p>

        <div className="mt-8">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-full text-white font-medium shadow-lg">
            View Tech Services
            <span className="text-lg">↓</span>
          </button>
        </div>
      </section>
    
    <section className="mt-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* TECHNOLOGY SERVICES */}
        <div>
          <h2 className="text-3xl font-extrabold text-white">
            Technology Services
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Engineering excellence for the digital age.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Scalable architecture for the modern web. We build fast, secure, and SEO-optimized websites using React, Next.js, and Node.",
              },
              {
                title: "Web Apps",
                desc: "Complex functional solutions for business automation. Custom CRM, ERP, and SaaS platforms tailored to your workflows.",
              },
              {
                title: "UI / UX Design",
                desc: "User-centric design systems that convert. We bridge the gap between aesthetics and usability with deep user research.",
              },
              {
                title: "Maintenance",
                desc: "Long-term reliability and support. Security patches, performance tuning, and continuous updates to keep you ahead.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className="h-40 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DIGITAL MARKETING */}
        <div className="mt-32">
          <h2 className="text-3xl font-extrabold text-white text-center">
            Digital Marketing
          </h2>
          <p className="mt-2 text-sm text-gray-400 text-center">
            Amplifying your brand reach through data-driven strategies.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "SEO",
                desc: "Search Engine Optimization to boost organic visibility and rankings.",
                icon: "🔍",
              },
              {
                title: "SMM",
                desc: "Social Media Marketing that engages audiences and builds brand loyalty.",
                icon: "📣",
              },
              {
                title: "Ads",
                desc: "PPC and paid performance marketing for immediate, measurable results.",
                icon: "🎯",
              },
              {
                title: "Branding",
                desc: "Identity design that defines your unique position in the market.",
                icon: "✨",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-xl mb-4">
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

      </div>
    </section>

    {/* CTA */}
      <section className="mt-32 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Let’s build something powerful together
          </h2>
          <p className="mt-4 text-blue-100 text-sm max-w-xl mx-auto">
            Partner with ACDA to design, build, and scale digital products that
            matter.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:scale-105 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
 
    </div>
  );
}
