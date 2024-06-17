import React, { useEffect, useState } from "react";
import { IoCartOutline, IoLogOutOutline } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../redux/slices/darkModeSlice";
import { getUsername } from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const getToken = localStorage.getItem("token");
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  const handleSetDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    return navigate("/login", {
      replace: true,
    });
  };

  useEffect(() => {
    setUsername(getUsername(getToken));
  }, []);

  return (
    <div
      className={`flex justify-end w-full pr-4 ${
        darkMode ? "bg-slate-600" : "bg-green-600"
      }  h-14`}>
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center h-8 gap-2 p-2 bg-red-700 rounded-md">
          <IoLogOutOutline color="white" />
          <p className="text-xs font-bold text-white">Logout</p>
        </button>
        {username && <p className="font-semibold text-white">{username}</p>}
        <button
          onClick={handleSetDarkMode}
          className="h-8 p-2 rounded-full bg-slate-800">
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
