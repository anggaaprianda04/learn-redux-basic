import React, { useEffect, useState } from "react";
import Loading from "../components/Utilities/Loading";
import ProductList from "../components/Fragments/ProductList";
import Navbar from "../components/Utilities/Navbar";
import { useSelector } from "react-redux";
import { getProducts } from "../services/product-service";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getProducts((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    console.log("get", getToken);
    if (getToken == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div
      className={`relative transition-colors duration-75 min-h-screen ${
        darkMode ? "bg-slate-900" : "bg-gray-300"
      } `}>
      <Navbar />
      {isLoading ? <Loading /> : <ProductList products={product} />}
    </div>
  );
};

export default ProductPage;
