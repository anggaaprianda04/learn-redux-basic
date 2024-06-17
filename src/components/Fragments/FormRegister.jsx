import React from "react";
import InputForm from "./InputForm";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label="Full Name"
        name="fullname"
        type="text"
        placeholder="Jhon Doe"
      />
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="jhondoe...."
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="password....."
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm password....."
      />
      <Button paddingTopBottom="py-3" title="Register" />
      <p className="mt-3 text-center">
        Do you have account?{" "}
        <Link to="/login" className="font-bold text-green-600">
          Login
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
