import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatMoney } from "../../utils";
import imgEmptyCart from "../../../src/assets/empty.png";
import TableCart from "./TableCart";

const Modal = ({ openModal }) => {
  const cart = useSelector((state) => state.cart);
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.data.forEach((element) => {
      total = total + element.qty * element.price;
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    <div className="absolute inset-0 top-0 left-0 right-0 bg-gray-900 mt-14 bg-opacity-65">
      <div className="flex justify-end p-4">
        <div className="z-50 w-5/12 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-black">Cart</h3>
            <button
              onClick={() => openModal(false)}
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          {cart.data.length > 0 ? (
            <div className="p-4 space-y-4 md:p-5">
              <div className="flex flex-col justify-between">
                <TableCart listCart={cart.data} />
                <div className="flex justify-between mt-4 font-bold">
                  <p>Total Price : </p>
                  <p>{formatMoney(totalPrice, "USD", "en-US")}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5 p-4 mb-7">
              <img
                className="object-cover w-7/12 h-80"
                src={imgEmptyCart}
                alt={imgEmptyCart}
              />
              <p className="text-xl font-bold">Empty Cart</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
