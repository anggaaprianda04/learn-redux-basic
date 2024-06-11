import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCartById } from "../../redux/slices/cartSlices";

const TableCart = ({ listCart }) => {
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th className="p-1 text-center">No</th>
          <th className="p-1 text-left">Product</th>
          <th className="p-1">Qty</th>
          <th className="p-1">Action</th>
        </tr>
      </thead>
      <tbody>
        {listCart.map((cart, index) => {
          return (
            <tr key={index}>
              <td className="p-1 text-center">{index + 1}.</td>
              <td className="p-1 mb-1 line-clamp-1 text-ellipsis">
                {cart.name}
              </td>
              <td className="p-1 text-center">{cart.qty}</td>
              <td className="flex justify-center align-middle">
                <button
                  onClick={() => dispatch(removeCartById(cart.id))}
                  className="p-2 bg-red-600 rounded-md">
                  <FaTrash color="white" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCart;
