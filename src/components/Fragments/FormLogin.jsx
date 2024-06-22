import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Button from "../Utilities/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth-service";

const FormLogin = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("berhasil login");
    const data = {
      username: event.target.username?.value,
      password: event.target.password?.value,
    };
    setLoading(true);
    // console.log("masuk");
    loginUser(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        // console.log("res", res);
        navigate("/products", {
          replace: true,
        });
      } else {
        setFetchError(res.response.data);
      }
      setLoading(false);
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleDisabledButton = () => {
    if (input.username.length == 0 || input.password.length == 0) {
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
        onChange={handleInput}
        value={input.username}
        label="Username"
        name="username"
        type="text"
        placeholder="username"
      />
      <InputForm
        onChange={handleInput}
        value={input.password}
        label="Password"
        name="password"
        type="password"
        placeholder="password"
      />
      <Button
        disabled={isDisabled}
        loading={isLoading}
        width="w-full"
        type={isDisabled ? "button" : "submit"}
        changeColor={isDisabled ? "bg-gray-400" : "bg-green-500"}
        paddingTopBottom="py-3"
        title="Login"
      />
      {fetchError && (
        <div className="flex items-center justify-center gap-6">
          <p className="my-3 font-semibold text-center text-red-700 animate-bounce">
            {fetchError}
          </p>
          <button
            onClick={() => setFetchError("")}
            className="font-semibold text-red-700">
            x
          </button>
        </div>
      )}
      <p className="mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-green-600">
          Register
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
