import React, { useContext } from "react";
import { categories } from "./categoryArray";
import { useNavigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { DarkContext } from "../Contex/DarkProvider";

const Categories = () => {
  const navigate = useNavigate();
  const { isDark } = useContext(DarkContext);

  return (
    <div
      className={`
        min-h-screen w-full px-4 py-6 transition-colors
        ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}
      `}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Chips */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((btn) => (
            <button
              key={btn.key}
              onClick={() =>
                navigate(btn.key === "all" ? "/all" : `/all/${btn.key}`)
              }
              className={`
                whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border
                transition-all duration-300
                ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                    : "bg-white border-gray-300 hover:bg-gray-200"
                }
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Sidebar (Desktop) */}
        <div
          className={`
            hidden lg:block w-72 p-6 rounded-2xl h-fit sticky top-6 border
            transition-colors
            ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-300"
            }
          `}
        >
          <h3 className="text-3xl font-extrabold mb-7">Categories</h3>

          <div className="space-y-3">
            {categories.map((filterBtn) => (
              <div
                key={filterBtn.key}
                onClick={() =>
                  navigate(
                    filterBtn.key === "all" ? "/all" : `/all/${filterBtn.key}`
                  )
                }
                className={`
                  cursor-pointer flex items-center justify-between p-3 rounded-xl border
                  transition-all duration-300
                  ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                      : "bg-white border-gray-200 hover:bg-gray-200"
                  }
                `}
              >
                <p className="font-semibold text-[15px]">{filterBtn.label}</p>
                <span className="text-xl">{filterBtn.icon || "→"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {categories.map((block) => (
            <div
              key={block.key}
              onClick={() =>
                navigate(block.key === "all" ? "/all" : `/all/${block.key}`)
              }
              className={`
                cursor-pointer p-6 rounded-2xl h-[240px] flex flex-col
                items-center justify-center gap-5 border transition-all duration-300
                ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                    : "bg-white border-gray-300 hover:bg-gray-200"
                }
              `}
            >
              <div
                className={`
                  p-6 rounded-2xl shadow-inner
                  ${isDark ? "bg-gray-700" : "bg-gray-100"}
                `}
              >
                <BiCategory
                  size={60}
                  className={isDark ? "text-gray-200" : "text-gray-800"}
                />
              </div>

              <h1 className="text-xl font-bold">{block.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
