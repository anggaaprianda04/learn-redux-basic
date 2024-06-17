import React from "react";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-4/12 h-auto p-6 bg-white rounded-md">
        <h1 className="text-4xl font-bold text-green-700">{title}</h1>
        <p className="mt-2 mb-5 text-gray-600">
          Welcome, please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
