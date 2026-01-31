export default function InputField({
  type = "text",
  placeholder,
  name,
  value = "",
  onChange,
  rows,
  required = false,
  className = "",
  error = "",
  ...props
}) {
  const baseClasses =
  "w-full rounded-xl border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  const errorClasses = error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500";
  const combinedClasses = `${baseClasses} ${errorClasses} ${className}`;

  if (type === "textarea") {
    return (
      <div className="w-full">
        <textarea
          rows={rows || 4}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={combinedClasses}
          required={required}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={combinedClasses}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}