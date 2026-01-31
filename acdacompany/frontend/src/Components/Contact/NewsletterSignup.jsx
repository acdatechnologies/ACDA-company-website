export default function NewsletterSignup() {
  return (
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
        <button className="bg-blue-700 px-4 text-sm font-semibold hover:bg-blue-800 transition">
          Join
        </button>
      </div>
    </div>
  );
}