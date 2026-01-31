export default function AboutHero() {
  return (
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
  );
}