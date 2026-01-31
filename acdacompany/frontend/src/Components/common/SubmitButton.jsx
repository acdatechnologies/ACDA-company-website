// export default function SubmitButton({
//   children,
//   loading = false,
//   disabled = false,
//   className = "",
//   ...props
// }) {
//   const baseClasses = "w-full rounded-xl py-3 font-semibold transition disabled:opacity-70 disabled:cursor-not-allowed";
//   const stateClasses = loading ? "bg-blue-500 cursor-wait" : "bg-blue-600 hover:bg-blue-700";
//   const combinedClasses = `${baseClasses} ${stateClasses} ${className} text-white`;

//   return (
//     <button
//       type="submit"
//       className={combinedClasses}
//       disabled={loading || disabled}
//       {...props}
//     >
//       {loading ? (
//         <span className="flex items-center justify-center gap-2">
//           <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//           </svg>
//           Sending...
//         </span>
//       ) : children}
//     </button>
//   );
// }

export default function SubmitButton({ 
  children, 
  loading = false,
  disabled = false,
  className = "",
  ...props 
}) {
  return (
    <button
      type="submit"
      className={`
        w-full rounded-xl 
        px-6 py-3 
        font-semibold 
        text-white 
        bg-blue-600 
        hover:bg-blue-700 
        disabled:bg-blue-400 
        disabled:cursor-not-allowed 
        transition 
        duration-200
        flex items-center justify-center
        ${className}
      `}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Sending...
        </>
      ) : children}
    </button>
  );
}