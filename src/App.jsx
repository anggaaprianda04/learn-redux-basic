import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/Utilities/Loading";
import ProductList from "./components/Fragments/ProductList";
import Header from "./components/Utilities/Header";

function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);

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
    <div className="min-h-screen bg-gray-300">
      <Header />
      {isLoading ? <Loading /> : <ProductList products={product} />}
    </div>
  );
}

export default App;
