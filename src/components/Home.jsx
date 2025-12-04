import React, { useContext } from "react";
import { IoTrendingUpSharp } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { TbBrandSupabase } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { DarkContext } from "../Contex/DarkProvider";

const Home = () => {
  const navigate = useNavigate();
  const { isDark } = useContext(DarkContext);

  return (
    <section
      className={`py-20 transition ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-amber-50 text-black"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          
          {/* LEFT */}
          <div className="flex-1">
            <h1
              className={`text-5xl md:text-6xl font-bold leading-snug mb-6 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Your{" "}
              <span className={`${isDark ? "text-purple-400" : "text-purple-600"}`}>
                Ultimate Shopping
              </span>{" "}
              Destination
            </h1>

            <p
              className={`text-lg max-w-xl mb-10 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Browse thousands of products, manage your cart, and enjoy seamless
              shopping with our modern marketplace.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/all")}
                className={`px-6 py-3 rounded-lg font-medium shadow cursor-pointer transition ${
                  isDark
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                Start Shopping →
              </button>

              <button
                className={`px-6 py-3 rounded-lg border shadow-sm font-medium cursor-pointer transition ${
                  isDark
                    ? "border-gray-500 hover:bg-gray-700 text-white"
                    : "border-gray-400 hover:bg-gray-100 text-black"
                }`}
              >
                Browse Categories
              </button>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* FAST SHOPPING */}
            <div
              className={`p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm h-full p-[100px] transition ${
                isDark
                  ? "bg-gradient-to-br from-gray-700 to-gray-800 text-gray-100"
                  : "bg-gradient-to-br from-purple-200 to-red-100 text-black"
              }`}
            >
              <TbBrandSupabase
                className={`text-4xl ${
                  isDark ? "text-purple-300" : "text-purple-700"
                }`}
              />
              <p className="mt-2 text-sm font-semibold">Fast Shopping</p>
            </div>

            {/* SECURE */}
            <div
              className={`p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm h-full transition ${
                isDark
                  ? "bg-gradient-to-br from-gray-700 to-gray-800 text-gray-100"
                  : "bg-gradient-to-br from-red-100 to-purple-200 text-black"
              }`}
            >
              <LuShield
                className={`text-4xl ${
                  isDark ? "text-red-300" : "text-red-600"
                }`}
              />
              <p className="mt-2 text-sm font-semibold">Secure</p>
            </div>

            {/* BEST DEALS */}
            <div
              className={`col-span-2 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm h-full p-[50px] transition ${
                isDark
                  ? "bg-gradient-to-br from-gray-700 to-gray-800 text-gray-100"
                  : "bg-gradient-to-br from-purple-100 to-red-100 text-black"
              }`}
            >
              <IoTrendingUpSharp
                className={`text-4xl ${
                  isDark ? "text-purple-300" : "text-purple-700"
                }`}
              />
              <p className="mt-2 text-sm font-semibold">Best Deals</p>
            </div>
          </div>
        </div>

        <hr
          className={`my-12 mt-[150px] ${
            isDark ? "border-gray-700" : "border-gray-300"
          }`}
        />

        {/* WHY CHOOSE US */}
        <div>
          <h2
            className={`text-xl font-bold mb-6 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Multiple Sources",
                text: "Products from various trusted APIs and sources combined in one place.",
              },
              {
                title: "Easy Management",
                text: "Add, edit, delete, and manage products with a simple interface.",
              },
              {
                title: "Smart Cart",
                text: "Add items to cart, adjust quantities, and track your purchases effortlessly.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-12 rounded-lg shadow-sm border transition ${
                  isDark
                    ? "bg-gray-800 border-gray-600 text-gray-100"
                    : "bg-white border-gray-300 text-black"
                }`}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div
          className={`mt-16 p-10 rounded-xl text-center shadow-sm mt-[200px] transition ${
            isDark
              ? "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100"
              : "bg-gradient-to-r from-purple-200 to-red-200 text-black"
          }`}
        >
          <h1 className="text-lg md:text-2xl font-semibold">
            Ready to Start Shopping?
          </h1>

          <p className="mt-2">
            Explore our complete collection of products today.
          </p>

          <button
            onClick={() => navigate("/all")}
            className={`mt-4 px-6 py-2 rounded-md cursor-pointer transition ${
              isDark
                ? "bg-purple-500 hover:bg-purple-600 text-white"
                : "bg-purple-700 hover:bg-purple-800 text-white"
            }`}
          >
            View All Products
          </button>

        </div>
      </div>
    </section>
  );
};

export default Home;
