import React from "react";
import clsx from "clsx";

const Typography = ({
  variant = "body", // "xs" | "sm" | "body" | "3xl" | "h1" | "h2" | "h3"
  as,
  children,
  className = "",
  ...props
}) => {
  const variantStyles = {
    xs: "text-xs", // 0.75rem / 1rem
    sm: "text-sm", // 0.875rem / 1.25rem
    body: "text-base",
    "3xl": "text-3xl", // 1.875rem / 2.25rem
    h1: "text-3xl font-bold",
    h2: "text-2xl font-bold",
    h3: "text-xl font-semibold",
  };

  // Determine the HTML element
  const getElement = () => {
    if (as) return as;
    if (variant.startsWith("h")) return variant;
    return "p";
  };

  const Component = getElement();
  const classes = clsx(variantStyles[variant], className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;

