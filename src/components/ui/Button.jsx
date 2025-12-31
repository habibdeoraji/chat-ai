import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary", // "primary" | "secondary" | "link" | "icon"
  iconPosition = "left", // "left" | "right" | "only"
  icon,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  href,
  ...props
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed my-1";

  // Variant styles based on design system
  const variantStyles = {
    primary: {
      base: iconPosition === "only" ? "w-10 h6 rounded-lg" : "px-4 py-2 rounded-lg",
      normal: "bg-indigo-700 text-white hover:bg-indigo-800",
      focus: "focus:ring-indigo-300",
      disabled: "bg-neutral-200 text-neutral-400",
    },
    secondary: {
      base: iconPosition === "only" ? "w-10 h6 rounded-lg" : "px-4 py-2 rounded-lg",
      normal: "bg-white text-indigo-700 hover:bg-neutral-50 hover:border-neutral-300",
      focus: "focus:ring-indigo-300",
      disabled: "bg-neutral-200 text-neutral-400 border-neutral-200",
    },
    link: {
      base: "px-0 py-0 bg-transparent border-0",
      normal: "text-indigo-700 hover:bg-neutral-100 rounded",
      focus: "focus:ring-indigo-300 rounded",
      disabled: "text-neutral-400",
    },
    icon: {
      base: "w-10 h6 rounded-lg bg-transparent border-0",
      normal: "text-neutral-700 hover:bg-neutral-100",
      focus: "focus:ring-indigo-300",
      disabled: "text-neutral-400",
    },
  };

  const styles = variantStyles[variant];
  const buttonClasses = clsx(
    baseClasses,
    styles.base,
    disabled ? styles.disabled : styles.normal,
    !disabled && styles.focus,
    className
  );

  // Determine component type
  const isLink = variant === "link" || variant === "icon";
  const Component = (isLink && href) ? "a" : "button";
  
  const componentProps = {
    className: buttonClasses,
    onClick: disabled ? undefined : onClick,
    ...(Component === "button" ? { type, disabled } : { href, "aria-disabled": disabled }),
    ...props
  };

  // Render content based on icon position
  const renderContent = () => {
    if (iconPosition === "only" || variant === "icon") {
      return icon && <span className="flex items-center justify-center">{icon}</span>;
    }
    
    return (
      <>
        {icon && iconPosition === "left" && (
          <span className="mr-2 flex items-center">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2 flex items-center">{icon}</span>
        )}
      </>
    );
  };

  return (
    <Component {...componentProps}>
      {renderContent()}
    </Component>
  );
};

export default Button;
