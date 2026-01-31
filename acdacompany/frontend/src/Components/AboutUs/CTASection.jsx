export default function CTASection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-blue-800 p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to build the future?
          </h2>

          <p className="mt-4 text-blue-100 text-sm md:text-base max-w-xl mx-auto">
            Let's discuss how ACDA can accelerate your digital growth through
            precision engineering.
          </p>

          <div className="mt-8">
            <a
              href="/contacts"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}