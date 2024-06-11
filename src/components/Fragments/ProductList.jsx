import React from "react";
import { formatMoney } from "../../utils";
import Button from "../Utilities/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-5 gap-3 p-4">
      {products.map((product, index) => {
        const id = product.id;
        const price = product.price;
        const name = product.title;
        return (
          <div
            className="flex flex-col p-2 transition-colors bg-white rounded-md h-80 hover:bg-gray-200 hover:duration-150 hover:shadow-md hover:shadow-black"
            key={index}>
            <img
              className="object-cover w-full h-44"
              src={product.image}
              alt={product.image}
            />
            <div className="flex flex-col justify-between h-full p-2">
              <p className="font-bold uppercase line-clamp-2 text-ellipsis">
                {product.title}
              </p>
              <div className="flex items-center justify-between text-sm font-semibold">
                <p>{`Price : ${formatMoney(product.price, "USD", "en-US")}`}</p>
                <Button
                  title="Add to cart"
                  onClick={() => {
                    dispatch(
                      addToCart({ id, name: name, qty: 1, price: price })
                    );
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
