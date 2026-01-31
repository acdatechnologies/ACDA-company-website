// ServiceCard.jsx
export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  hasImage = false,
  bgColor = "white",
  textColor = "gray-900",
  descColor = "gray-600",
  border = false,
  hoverEffect = true
}) {
  const bgClass = bgColor.startsWith('#') ? '' : `bg-${bgColor}`;
  const textClass = `text-${textColor}`;
  const descClass = `text-${descColor}`;
  const borderClass = border ? `border border-${border}` : '';
  const hoverClass = hoverEffect ? 'hover:shadow-xl transition' : '';
  
  return (
    <div className={`rounded-2xl p-6 shadow-lg ${bgClass} ${borderClass} ${hoverClass}`}>
      {hasImage && (
        <div className="h-40 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6" />
      )}
      {icon && (
        <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-xl mb-4">
          {icon}
        </div>
      )}
      <h3 className={`text-lg font-semibold ${textClass}`}>
        {title}
      </h3>
      <p className={`mt-2 text-sm ${descClass} leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}