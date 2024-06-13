import React from "react";

const Button = ({
  title,
  onClick,
  changeColor = "bg-green-500",
  changeHoverColor = "hover:bg-green-700",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-white transition-colors ${changeColor} rounded-md ${changeHoverColor} hover:duration-100`}>
      {title}
    </button>
  );
};

export default Button;
