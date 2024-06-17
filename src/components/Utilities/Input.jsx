import React from "react";

const Input = (props) => {
  const { type, placeholder, name, ref, value, onChange } = props;
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 bg-gray-200 rounded-md"
      type={type}
      name={name}
    />
  );
};

export default Input;
