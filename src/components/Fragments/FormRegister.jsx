import React, { useEffect, useState } from "react";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";

const FormRegister = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPass: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("berhasil");
    // console.log("fullname", event.target.confirmPass.value);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleDisabledButton = () => {
    if (
      input.fullname.length == 0 ||
      input.username.length == 0 ||
      input.password.length == 0 ||
      input.confirmPass.length == 0
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    handleDisabledButton();
  }, [input]);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        value={input.fullname}
        onChange={handleInput}
        label="Full Name"
        name="fullname"
        type="text"
        placeholder="Jhon Doe"
      />
      <InputForm
        value={input.username}
        onChange={handleInput}
        label="Username"
        name="username"
        type="text"
        placeholder="jhondoe...."
      />
      <InputForm
        value={input.password}
        onChange={handleInput}
        label="Password"
        name="password"
        type="password"
        placeholder="password....."
      />
      <InputForm
        value={input.confirmPass}
        onChange={handleInput}
        label="Confirm Password"
        name="confirmPass"
        type="password"
        placeholder="Confirm password....."
      />
      <Button
        loading={false}
        disabled={isDisabled}
        type={isDisabled ? "button" : "submit"}
        width="w-full"
        changeColor={isDisabled ? "bg-gray-400" : "bg-green-500"}
        paddingTopBottom="py-3"
        title="Register"
      />
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
