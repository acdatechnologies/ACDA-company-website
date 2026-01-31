export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-300 to-blue-200 p-16 text-center shadow-xl">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Let’s Work Together
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
            Our team is ready to turn your vision into reality.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {/* FORM */}
          <div className="md:col-span-2 bg-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900">
              Send us a message
            </h3>

            <form className="mt-6 space-y-5">
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="hello@acda.tech"
                className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">
                Contact Info
              </h4>

              <div className="space-y-4 text-sm text-gray-700">
                <p>📧 hello@acda.tech</p>
                <p>📞 +1 (555) 000-ACDA</p>
                <p>📍 Tech District, San Francisco</p>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600 p-6 text-white shadow-lg">
              <h4 className="font-semibold mb-2">
                Join our newsletter
              </h4>
              <p className="text-xs opacity-90 mb-4">
                Get the latest tech insights and updates delivered to your inbox.
              </p>

              <div className="flex bg-white rounded-xl overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm text-gray-900 outline-none"
                />
                <button className="bg-blue-700 px-4 text-sm font-semibold">
                  Join
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
