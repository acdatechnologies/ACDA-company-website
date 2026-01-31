  // or '../common/ServiceCard'

import ServiceCard from "../common/ServiceCard";

const techServices = [
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
];

export default function TechServices() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-white">
        Technology Services
      </h2>
      <p className="mt-2 text-sm text-gray-400">
        Engineering excellence for the digital age.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {techServices.map((item, i) => (
          <ServiceCard
            key={i}
            title={item.title}
            description={item.desc}
            hasImage={true}
            bgColor="white"
            textColor="gray-900"
            descColor="gray-600"
          />
        ))}
      </div>
    </div>
  );
}