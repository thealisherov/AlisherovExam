import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useContext } from "react";
import { FaArrowLeft, FaPhone, FaRegAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Riple } from "react-loading-indicators";
import { MdDateRange, MdEmail } from "react-icons/md";
import { DarkContext } from "../Contex/DarkProvider";

const Users = () => {
  const usersUrl = "https://dummyjson.com/users";
  const navigate = useNavigate();
  const { isDark } = useContext(DarkContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(usersUrl);
      return res.data.users;
    },
  });

  useEffect(() => {
    console.log(data);
  });


  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Riple
          color={isDark ? "#ffffff" : "#0a0d1f"}
          size="large"
          text="Loading"
          textColor={isDark ? "#ffffff" : "#0e1322"}
        />
      </div>
    );
  }

  // Error
  if (error) {
    const errorText = error.message;
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-4">
        <div
          className={`
            rounded-xl shadow-2xl p-8 max-w-sm w-full text-center space-y-5 border
            ${isDark ? "bg-gray-800 border-red-400 text-white" : "bg-white border-red-300 text-gray-800"}
          `}
        >
          <span className="text-6xl text-red-500 block animate-pulse">❌</span>

          <h2 className="text-2xl font-bold">Kechirasiz, xatolik yuz berdi</h2>

          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {errorText || "Kutilmagan xatolik ro'y berdi. Keyinroq urinib ko'ring."}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md 
              hover:bg-red-700 transition duration-150 active:bg-red-800"
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
        min-h-screen p-4
        ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
      `}
    >
      <button
        className="flex items-center gap-1 p-1 cursor-pointer text-blue-500"
        onClick={() => navigate("/home")}
      >
        <FaArrowLeft /> Back to home
      </button>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {data.map((user) => (
          <div
            key={user.id}
            className={`
              border p-6 rounded-3xl cursor-pointer shadow-lg transition-all
              hover:-translate-y-2 hover:shadow-2xl
              ${isDark
                ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                : "bg-white/70 backdrop-blur-md border-gray-200 hover:bg-white/90"}
            `}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-xl font-semibold">
                  {user.firstName} {user.lastName}
                </h1>
                <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  @{user.username}
                </p>
              </div>

              <div
                className="rounded-full bg-gradient-to-br from-purple-500 to-blue-500 
                text-white w-12 h-12 flex items-center justify-center font-bold shadow-md"
              >
                {user.firstName.slice(0, 1)}
              </div>
            </div>

            {/* Body */}
            <div className={`space-y-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              <div className="flex items-center gap-2">
                <MdEmail className="text-blue-500" />
                <p>{user.email}</p>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone className="text-green-500" />
                <p>{user.phone}</p>
              </div>

              <div className="flex items-center gap-2">
                <MdDateRange className="text-red-500" />
                <p>{user.birthDate}</p>
              </div>

              <div className="flex items-center gap-2">
                <FaRegAddressCard className="text-orange-500" />
                <p>{user.address.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
