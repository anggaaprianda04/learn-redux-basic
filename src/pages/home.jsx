import React, { useEffect } from "react";
import Button from "../components/Utilities/Button";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const getToken = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken != null) {
      navigate("/products");
    }
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link to="/login">
        <Button title="Login" />
      </Link>
    </div>
  );
};

export default HomePage;
