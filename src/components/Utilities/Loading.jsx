import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div
          style={{ borderWidth: "14px" }}
          className="w-20 h-20 rounded-full border-gray-50 animate-spin border-t-blue-600"></div>
        <p className="mt-6 text-2xl font-bold text-center">Loading ...</p>
      </div>
    </div>
  );
};

export default Loading;
