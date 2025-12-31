import React from "react";
import clsx from "clsx";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "Ask me anything...",
  disabled = false,
  error = false,
  filled = false,
  className = "",
  ...props
}) => {
  const baseClasses = "w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Determine state classes
  const stateClasses = clsx(
    baseClasses,
    {
      // Normal state
      "bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400": 
        !disabled && !error && !filled,
      
      // Filled state
      "bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400": 
        !disabled && !error && filled,
      
      // Focused state (handled by focus: classes)
      "focus:border-indigo-700 focus:ring-indigo-300": 
        !disabled && !error,
      
      // Disabled state
      "bg-neutral-200 border-neutral-200 text-neutral-500 placeholder-neutral-400 cursor-not-allowed": 
        disabled,
      
      // Error states
      "border-red-500": 
        !disabled && error,
      
      "focus:border-red-500 focus:ring-red-300": 
        !disabled && error,
    },
    className
  );

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={stateClasses}
      {...props}
    />
  );
};

export default Input;

