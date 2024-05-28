import React from "react";

const CustomInput = ({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  maxLength,
  iconPath,
}) => {
  return (
    <div className={`relative mx-auto mt-4  ${className}`}>
      <input
        className="w-full  px-3 py-2 border border-secondary-black rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-secondary-yellow focus:border-secondary-yellow pr-10 font-bold placeholder-secondary-black "
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      <img
        src={iconPath}
        alt="icon"
        className="absolute right-3 top-1/2 h-6 w-6 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};

export default CustomInput;
