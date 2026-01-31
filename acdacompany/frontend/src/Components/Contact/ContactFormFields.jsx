import InputField from "../common/InputField";

 

export default function ContactFormFields({
  formData,
  handleChange,
  errors = {},
  useReusableComponents = true
}) {
  const fields = [
    {
      type: "text",
      name: "name",
      placeholder: "John Doe",
      required: true,
      value: formData.name,
      error: errors.name
    },
    {
      type: "email",
      name: "email",
      placeholder: "hello@acda.tech",
      required: true,
      value: formData.email,
      error: errors.email
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Tell us about your project...",
      rows: 4,
      required: true,
      value: formData.message,
      error: errors.message
    }
  ];

  if (!useReusableComponents) {
    return (
      <>
        {fields.map(field => {
          const commonProps = {
            key: field.name,
            name: field.name,
            value: field.value,
            onChange: handleChange,
            required: field.required,
            placeholder: field.placeholder,
            className: "w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          };

          if (field.type === "textarea") {
            return <textarea {...commonProps} rows={field.rows} />;
          }
          return <input type={field.type} {...commonProps} />;
        })}
      </>
    );
  }

  return (
    <>
      {fields.map(field => (
        <InputField
          key={field.name}
          type={field.type}
          name={field.name}
          value={field.value}
          onChange={handleChange}
          placeholder={field.placeholder}
          required={field.required}
          rows={field.rows}
          error={field.error}
        />
      ))}
    </>
  );
}