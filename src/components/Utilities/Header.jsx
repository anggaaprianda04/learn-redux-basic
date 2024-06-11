import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="flex justify-end w-full pr-4 bg-green-600 h-14">
      <button className="relative" onClick={handleClick}>
        {cart.data.length != 0 && (
          <span className="absolute px-2 py-1 text-xs text-white bg-red-600 rounded-full top-1">
            {cart.data.length}
          </span>
        )}
        <IoCartOutline color="white" size={30} />
      </button>
      {openModal && <Modal openModal={setOpenModal} />}
    </div>
  );
};

export default Header;
