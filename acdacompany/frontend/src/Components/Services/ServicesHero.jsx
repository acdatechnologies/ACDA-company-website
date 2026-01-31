export default function ServicesHero() {
  return (
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
  );
}