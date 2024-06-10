import React from "react";

const CustomButton = ({ children, className, variant, size, ...props }) => {
  const variantClass =
    {
      primary: "bg-primary-brown text-white border hover:bg-third-brown",
      secondary:
        " bg-white text-primary-brown border border-secondary-black focus:text-white focus:bg-primary-brown",
      success: "bg-green-500 text-white hover:bg-green-700",
      danger: "bg-red-500 text-white hover:bg-red-700",
    }[variant] || "bg-primary-brown text-white hover:bg-third-brown";

  const sizeClass =
    {
      small: "text-xs",
      medium: "text-sm",
      large: "text-lg",
    }[size] || "text-sm";

  const fullClassName = `w-full px-4 py-2 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-secondary-yellow focus:ring-opacity-50 ${variantClass} ${sizeClass} ${className}`;

  return (
    <button className={fullClassName} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
