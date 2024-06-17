import React from "react";

const Button = ({
  title,
  onClick,
  disabled = false,
  loading = false,
  width = "w-auto",
  paddingTopBottom = "py-1",
  changeColor = "bg-green-500",
  changeHoverColor = "hover:bg-green-700",
  type = "button",
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`px-3 ${width} ${paddingTopBottom} ${changeColor} text-white transition-colors ${changeColor} rounded-md ${
        disabled == true ? "" : changeHoverColor
      } hover:duration-100`}>
      {loading && (
        <div className="flex flex-col items-center">
          <div
            style={{ borderWidth: "4px" }}
            className="w-5 h-5 rounded-full border-gray-50 animate-spin border-t-gray-600"></div>
        </div>
      )}
      {!loading && <span>{title}</span>}
    </button>
  );
};

export default Button;
