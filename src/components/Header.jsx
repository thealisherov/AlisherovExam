import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiShoppingCart, FiSun, FiX } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { DarkContext } from "../Contex/DarkProvider";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isDark, setDark } = useContext(DarkContext);

  // LINK STYLE
  const linkStyle = ({ isActive }) =>
    isActive
      ? `px-3 py-1 rounded bg-blue-600 text-white font-semibold cursor-pointer`
      : `${isDark
          ? "text-gray-300 hover:text-blue-400"
          : "text-gray-700 hover:text-blue-600"
        } transition cursor-pointer`;

  return (
    <header
      className={`shadow-md sticky top-0 z-50 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-3">

        {/* LOGO */}
        <div
          onClick={() => navigate("/home")}
          className={`text-2xl font-bold cursor-pointer ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          ShopHub
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex gap-6 text-lg">
          <NavLink className={linkStyle} to="/home">Home</NavLink>
          <NavLink className={linkStyle} to="/categories">Categories</NavLink>
          <NavLink className={linkStyle} to="/cart">Cart</NavLink>
          <NavLink className={linkStyle} to="/all">All Products</NavLink>
          <NavLink className={linkStyle} to="/about">About</NavLink>
          <NavLink className={linkStyle} to="/users">Users</NavLink>
          <NavLink className={linkStyle} to="/dashboard">Dashboard</NavLink>

          
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">

          {/* CART */}
          <button
            onClick={() => navigate("/cart")}
            className={`text-2xl transition cursor-pointer ${
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            <FiShoppingCart />
          </button>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDark(!isDark)}
            className={`p-2 rounded-lg transition cursor-pointer ${
              isDark ? "bg-gray-700 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isDark ? <FiSun /> : <FaRegMoon />}
          </button>

          {/* LOGIN */}
          <button
            className={`px-4 py-1 border rounded-lg transition cursor-pointer ${
              isDark
                ? "border-gray-600 hover:bg-gray-700"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
         <NavLink to="/login">
             Log in
         </NavLink>
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`lg:hidden text-3xl cursor-pointer ${
            isDark ? "text-white" : "text-black"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`lg:hidden flex flex-col gap-4 p-4 border-t ${
            isDark
              ? "bg-gray-900 border-gray-700 text-white"
              : "bg-white border-gray-200 text-black"
          }`}
        >
          <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/home">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/categories">Categories</NavLink>
          <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/cart">Cart</NavLink>
          <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/all">All Products</NavLink>
          <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/about">About</NavLink>
          <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/users">Users</NavLink>

          <div className="flex items-center gap-4 mt-4">

            <button
              onClick={() => {
                navigate("/cart");
                setOpen(false);
              }}
              className={`text-2xl cursor-pointer ${
                isDark
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <FiShoppingCart />
            </button>

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDark(!isDark)}
              className={`px-3 py-1 border rounded-lg cursor-pointer transition ${
                isDark
                  ? "border-gray-600 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {isDark ? <FiSun /> : <FaRegMoon />}
            </button>

            <button
              className={` px-4 py-1 border rounded-lg cursor-pointer transition ${
                isDark
                  ? "border-gray-600 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
         <NavLink to="/login">
               Log in
         </NavLink>
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
