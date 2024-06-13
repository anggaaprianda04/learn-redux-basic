import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../redux/slices/darkModeSlice";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  const handleSetDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <div
      className={`flex justify-end w-full pr-4 ${
        darkMode ? "bg-slate-600" : "bg-green-600"
      }  h-14`}>
      <div className="flex gap-2">
        <button
          onClick={handleSetDarkMode}
          className="h-8 p-2 mt-3 rounded-full bg-slate-800">
          {darkMode ? (
            <MdLightMode color="white" />
          ) : (
            <MdDarkMode color="white" />
          )}
        </button>
        <button className="relative" onClick={handleClick}>
          {cart.data.length != 0 && (
            <span className="absolute px-2 py-1 text-xs text-white bg-red-600 rounded-full top-1">
              {cart.data.length}
            </span>
          )}
          <IoCartOutline color="white" size={30} />
        </button>
      </div>
      {openModal && <Modal openModal={setOpenModal} />}
    </div>
  );
};

export default Navbar;
