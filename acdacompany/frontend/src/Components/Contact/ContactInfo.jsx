export default function ContactInfo() {
  const contactDetails = [
    { icon: "📧", text: "acdatechnologies@gmail.com" },
    { icon: "📞", text: "+91 9150691551" },
    { icon: "📍", text: "Dindigul District, Palani" },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <h4 className="font-semibold text-gray-900 mb-4">
        Contact Info
      </h4>

      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
            <span className="text-lg">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}