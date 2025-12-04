import React, { useReducer, useContext } from "react";
import { initialState, render } from "../store/reducer";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import { Riple } from "react-loading-indicators";
import { categories } from "./categoryArray";
import { MdOutlineGrade } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { DarkContext } from "../Contex/DarkProvider";
import { CartContext } from "../Contex/CartContext";

const AllProducts = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const currentCategory = category || "all";
  const [state, dispatch] = useReducer(render, initialState);
  const { isDark } = useContext(DarkContext);
const {addToCart} = useContext(CartContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", currentCategory],
    queryFn: () => getProducts(currentCategory),
  });

  const filteredProducts = data?.filter((item) =>
    item.title.toLowerCase().includes(state.search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Riple
          color="#0a0d1f"
          size="large"
          text="Loading"
          textColor="#0e1322"
        />
      </div>
    );
  }

  if (error) {
    const errorText = error.message;
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-4">
        <div
          className={`
            rounded-xl shadow-2xl p-8 max-w-sm w-full text-center space-y-5 border
            ${isDark ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-red-300 text-gray-900"}
          `}
        >
          <span className="text-6xl text-red-500 block animate-pulse">❌</span>
          <h2 className="text-2xl font-bold">Kechirasiz, xatolik yuz berdi</h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {errorText || "Kutilmagan xatolik yuz berdi. Keyinroq urinib ko‘ring."}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            Qayta Yuklash
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        min-h-screen mx-auto p-4 flex flex-col lg:flex-row gap-6
        transition-colors
        ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}
      `}
    >
  
  {/* Sidebar */}
<div
  className={`
    w-full lg:w-64 p-6 rounded-2xl h-fit border sticky top-4 
    transition-colors flex-shrink-0
    ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
  `}
>

  <h3 className="text-2xl font-bold mb-6 border-b-2 border-indigo-500 pb-3 hidden lg:block">
    Categories
  </h3>

  {/* MOBILE FILTER — horizontally scrollable */}
  <div className="lg:hidden flex gap-3 overflow-x-auto pb-3 no-scrollbar">
    {categories.map((filterBtn) => (
      <button
        key={filterBtn.key}
        onClick={() =>
          navigate(filterBtn.key === "all" ? "/all" : `/all/${filterBtn.key}`)
        }
        className={`
          whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all
          border flex items-center gap-2 
          ${isDark 
            ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600" 
            : "bg-white border-gray-300 text-gray-700 hover:bg-indigo-100"}
        `}
      >
        {filterBtn.icon && <span>{filterBtn.icon}</span>}
        {filterBtn.label}
      </button>
    ))}
  </div>

  {/* DESKTOP SIDEBAR */}
  <div className="hidden lg:block space-y-2">
    {categories.map((filterBtn) => (
      <div
        key={filterBtn.key}
        onClick={() =>
          navigate(filterBtn.key === "all" ? "/all" : `/all/${filterBtn.key}`)
        }
        className={`
          p-3 rounded-xl cursor-pointer flex items-center justify-between
          transition-all duration-300 border
          ${isDark
            ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
            : "bg-white border-gray-200 hover:bg-indigo-50"}
        `}
      >
        <p className="font-semibold text-sm">{filterBtn.label}</p>
        <span className="text-lg">{filterBtn.icon || "→"}</span>
      </div>
    ))}
  </div>

</div>

      {/* Main Content */}
      <div className="flex-1">

        {/* Search */}
        <div
          className={`
            mb-8 p-5 rounded-2xl shadow-lg border
            ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
          `}
        >
          <input
            type="text"
            placeholder="🔍 Search products..."
            className={`
              w-full p-4 rounded-xl border-2 focus:outline-none transition-all
              ${isDark
                ? "bg-gray-800 text-white border-gray-600 focus:border-indigo-500"
                : "bg-white text-gray-700 border-gray-300 focus:border-indigo-500"}
            `}
            value={state.search}
            onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`
                  p-5 rounded-2xl shadow-lg flex flex-col border transition-all hover:shadow-2xl
                  ${isDark
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                    : "bg-white border-gray-200 hover:scale-[1.03]"}
                `}
              >
                <div className="w-full h-56 rounded-xl overflow-hidden mb-4 bg-gray-300">
                  <img
                    src={product.thumbnail}
                    className="w-full h-full object-cover hover:scale-125 transition-transform"
                  />
                </div>

                <h1
                  className="text-lg font-bold truncate mb-2"
                  title={product.title}
                >
                  {product.title}
                </h1>

                <p className="text-sm opacity-80 mb-3 h-10 line-clamp-2">
                  {product.description.slice(0, 50)}...
                </p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-500/20">
                  <div>
                    <h2 className="text-2xl font-bold text-green-500">
                      ${product.price}
                    </h2>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <MdOutlineGrade className="w-5 h-5" />
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="cursor-pointer px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      Details
                    </button>

                    <button 
                    onClick={()=>addToCart(product)}
                    className=" cursor-pointer p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                      <FiShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center py-16 text-xl opacity-70">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
