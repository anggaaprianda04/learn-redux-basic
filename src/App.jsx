import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/Utilities/Loading";
import ProductList from "./components/Fragments/ProductList";
import Navbar from "./components/Utilities/Navbar";
import { useSelector } from "react-redux";

function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
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
}

export default App;
