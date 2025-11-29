import React, { useContext } from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DarkContext } from "../Contex/DarkProvider";

export default function Footer() {
  const navigate = useNavigate();
  const { isDark } = useContext(DarkContext);

  return (
    <footer
      className={`py-16 border-t  transition ${ isDark
          ? "bg-gray-900 border-gray-700 text-gray-200"
          : "bg-white border-gray-300 text-black"
      }`}
    >
        
      <div className="container mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Branding */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              ShopHub
            </h2>
            <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Your one-stop shop for everything.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li
                onClick={() => navigate("/all")}
                className={`cursor-pointer transition ${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Products
              </li>

              <li
                onClick={() => navigate("/categories")}
                className={`cursor-pointer transition ${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Categories
              </li>

              <li
                onClick={() => navigate("/cart")}
                className={`cursor-pointer transition ${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Cart
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li
                onClick={() => navigate("/about")}
                className={`cursor-pointer transition ${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                About
              </li>

              <li
                onClick={() => navigate("/contact")}
                className={`cursor-pointer transition ${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Contact
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex items-center gap-4">
              <span
                className={`cursor-pointer flex items-center gap-2 transition ${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                <FaTwitter /> Twitter
              </span>

              <span
                className={`cursor-pointer flex items-center gap-2 transition ${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                <FaFacebook /> Facebook
              </span>
            </div>
          </div>

        </div>

        {/* LINE */}
        <hr className={`${isDark ? "border-gray-700" : "border-gray-300"} my-6`} />

        {/* COPYRIGHT */}
        <p className={`text-sm text-center ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}>
          © 2025 ShopHub. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
