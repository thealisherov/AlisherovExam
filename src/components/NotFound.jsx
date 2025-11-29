import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkContext } from "../Contex/DarkProvider";

export default function NotFound() {
  const navigate = useNavigate();
  const { isDark } = useContext(DarkContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 transition ${
        isDark
          ? "bg-gray-900 text-gray-200"
          : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-8xl font-bold mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p
        className={`max-w-md mb-8 ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        The page you are looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/home")}
        className={`px-6 py-3 rounded-lg font-medium transition cursor-pointer shadow ${
          isDark
            ? "bg-purple-700 text-white hover:bg-purple-800"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
      >
        Go Home
      </button>
    </div>
  );
}
