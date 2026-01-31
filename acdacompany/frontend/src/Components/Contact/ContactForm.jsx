// import { useState } from "react";
 
// import ContactFormFields from "./ContactFormFields";
// import SubmitButton from "../common/SubmitButton";

// export default function ContactForm({
//   showTitle = true,
//   useReusableComponents = true,
//   onSubmit: customOnSubmit,
//   className = ""
// }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }
    
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setLoading(true);
//     setSuccess(false);

//     try {
//       if (customOnSubmit) {
//         await customOnSubmit(formData);
//       } else {
//         // Default form submission - simulate API call
//         console.log("Form data:", formData);
//         await new Promise(resolve => setTimeout(resolve, 1500));
//       }
      
//       // Reset form on success
//       setFormData({ name: "", email: "", message: "" });
//       setSuccess(true);
//       setTimeout(() => setSuccess(false), 3000);
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setErrors({ submit: "Failed to send message. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`bg-white rounded-3xl p-10 shadow-xl ${className}`}>
//       {showTitle && (
//         <h3 className="text-lg font-semibold text-gray-900 mb-6">
//           Send us a message
//         </h3>
//       )}

//       {success && (
//         <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
//           Message sent successfully! We'll get back to you soon.
//         </div>
//       )}

//       {errors.submit && (
//         <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
//           {errors.submit}
//         </div>
//       )}

//       <form className="space-y-5" onSubmit={handleSubmit} noValidate>
//         <ContactFormFields
//           formData={formData}
//           handleChange={handleChange}
//           errors={errors}
//           useReusableComponents={useReusableComponents}
//         />

//         <SubmitButton loading={loading} disabled={loading}>
//           Send Message
//         </SubmitButton>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import ContactFormFields from "./ContactFormFields";
import SubmitButton from "../common/SubmitButton";

export default function ContactForm({
  showTitle = true,
  useReusableComponents = true,
  apiEndpoint = "http://localhost:5000/api/send-email",
  onSuccess,
  onError,
  className = ""
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📝 Form submission started");
    
    if (!validateForm()) {
      console.log("❌ Form validation failed");
      return;
    }
    
    setLoading(true);
    setSuccess(false);
    setSubmittedEmail(formData.email);

    try {
      console.log("🚀 Sending to backend:", apiEndpoint);
      console.log("📦 Data:", formData);
      
      // ✅ FIXED: Added method: "POST" explicitly
      const response = await fetch(apiEndpoint, {
        method: "POST",  // ← THIS WAS MISSING!
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📨 Response status:", response.status);
      console.log("📨 Response ok?", response.ok);
      
      // Get response text first for debugging
      const responseText = await response.text();
      console.log("📨 Response text:", responseText);
      
      if (!response.ok) {
        // Try to parse as JSON, but handle non-JSON responses
        let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch {
          errorData = { message: responseText || "Unknown error" };
        }
        
        throw new Error(
          errorData.message || 
          errorData.errors?.join(", ") ||
          `Server responded with ${response.status}: ${response.statusText}`
        );
      }

      // Parse successful response
      const result = JSON.parse(responseText);
      console.log("✅ Success:", result);
      
      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setSuccess(true);
      
      if (onSuccess) {
        onSuccess(result, formData);
      }
      
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (error) {
      console.error("❌ Form submission error:", error);
      
      let errorMessage = error.message;
      
      // Handle specific errors
      if (error.message.includes("Failed to fetch")) {
        errorMessage = "Cannot connect to backend server. Please check: 1) Flask is running on port 5000, 2) CORS is enabled";
      } else if (error.message.includes("405")) {
        errorMessage = "Server rejected request. Make sure backend accepts POST requests.";
      } else if (error.message.includes("NetworkError")) {
        errorMessage = "Network error. Check if backend server is running at http://localhost:5000";
      }
      
      setErrors({ 
        submit: errorMessage
      });
      
      if (onError) {
        onError(error, formData);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-3xl p-10 shadow-xl ${className}`}>
      {showTitle && (
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Send us a message
        </h3>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                Message sent successfully!
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <p>✓ We have received your message</p>
                <p>✓ We'll reply to you at <strong>{submittedEmail}</strong> within 24 hours</p>
                <p className="mt-2 text-xs text-green-600">
                  Check your spam folder if you don't see our reply
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error sending message
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{errors.submit}</p>
                <p className="mt-2">
                  Alternative: Email us directly at{" "}
                  <a 
                    href="mailto:hello@acda.tech" 
                    className="underline font-medium hover:text-red-800"
                  >
                    hello@acda.tech
                  </a>
                </p>
                <p className="mt-1 text-xs text-red-600">
                  Make sure Flask is running: <code>python app.py</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <form 
        className="space-y-5" 
        onSubmit={handleSubmit} 
        noValidate
        method="POST"  // Added for clarity
      >
        <ContactFormFields
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          useReusableComponents={useReusableComponents}
        />

        <SubmitButton loading={loading} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </SubmitButton>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="underline hover:text-gray-700">Privacy Policy</a>
        </p>
      </form>
    </div>
  );
}