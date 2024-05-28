import React from "react";

const CustomButton = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 rounded-md text-white bg-primary-brown hover:bg-third-brown font-bold focus:outline-none focus:ring-2 focus:ring-secondary-yellow focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
