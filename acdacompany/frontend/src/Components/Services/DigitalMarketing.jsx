
import ServiceCard from "../common/ServiceCard"; // or '../common/ServiceCard'

const marketingServices = [
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
];

export default function DigitalMarketing() {
  return (
    <div className="mt-32">
      <h2 className="text-3xl font-extrabold text-white text-center">
        Digital Marketing
      </h2>
      <p className="mt-2 text-sm text-gray-400 text-center">
        Amplifying your brand reach through data-driven strategies.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {marketingServices.map((item, i) => (
          <ServiceCard
            key={i}
            title={item.title}
            description={item.desc}
            icon={item.icon}
            bgColor="white/5"
            textColor="white"
            descColor="gray-400"
            border="white/10"
          />
        ))}
      </div>
    </div>
  );
}