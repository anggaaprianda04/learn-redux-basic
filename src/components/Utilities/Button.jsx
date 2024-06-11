import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 text-white transition-colors bg-green-500 rounded-md hover:bg-green-700 hover:duration-100">
      {title}
    </button>
  );
};

export default Button;
