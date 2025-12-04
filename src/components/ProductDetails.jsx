import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Riple } from "react-loading-indicators";
import { api } from "../api/axios";
import { DarkContext } from "../Contex/DarkProvider";
import { CartContext } from "../Contex/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { isDark } = useContext(DarkContext);
const {addToCart} = useContext(CartContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ["singleProduce", id],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`);
      return res.data;
    },
  });

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
            ${isDark 
              ? "bg-gray-800 border-gray-700 text-gray-100" 
              : "bg-white border-red-300 text-gray-900"}
          `}
        >
          <span className="text-6xl text-red-500 block animate-pulse">❌</span>
          <h2 className="text-2xl font-bold">Kechirasiz, xatolik yuz berdi</h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {errorText || "Amalni bajarishda xatolik yuz berdi. Keyinroq urinib ko‘ring."}
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
        min-h-screen w-full py-6
        ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}
      `}
    >
      {data ? (
        <div
          className={`
            max-w-4xl mx-auto p-4 md:p-8 rounded-lg shadow-lg 
            ${isDark ? "bg-gray-800 shadow-gray-700" : "bg-white shadow-gray-300"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Images */}
            <div className="flex flex-col items-center">
              <img
                src={data.thumbnail}
                className="w-full max-h-96 object-contain rounded-lg shadow-md mb-4"
              />
              <div className="flex space-x-2 overflow-x-auto p-2">
                {data.images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    className={`w-16 h-16 rounded-md object-cover border cursor-pointer
                      ${isDark ? "border-gray-600" : "border-gray-300"}
                      hover:border-blue-500 transition
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <p className="text-sm opacity-70 uppercase">{data.category}</p>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-red-500">
                  ${ (data.price * (1 - data.discountPercentage / 100)).toFixed(2) }
                </span>

                <span className="text-xl line-through opacity-60">
                  ${data.price.toFixed(2)}
                </span>

                <span className="text-lg font-semibold text-green-500">
                  ({data.discountPercentage}% OFF)
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg mr-1">★</span>
                  <span>{data.rating}</span>
                  <span className="opacity-60 ml-1">
                    ({data.reviews.length} reviews)
                  </span>
                </div>

                <span
                  className={`
                    px-3 py-1 text-xs rounded-full font-semibold
                    ${data.stock > 0 
                      ? "bg-green-200 text-green-900"
                      : "bg-red-200 text-red-900"
                    }
                  `}
                >
                  {data.stock > 0 ? `${data.stock} In Stock` : "Out of Stock"}
                </span>
              </div>

              <p className="pt-4 border-t opacity-90">{data.description}</p>

              {/* Other Specs */}
              <div className="text-sm space-y-2 opacity-90">
                <p><b>SKU:</b> {data.sku}</p>
                <p><b>Weight:</b> {data.weight} kg</p>
                <p>
                  <b>Dimensions:</b> {data.dimensions.width} x {data.dimensions.height} x {data.dimensions.depth}
                </p>
                <p><b>Warranty:</b> {data.warrantyInformation}</p>
                <p><b>Shipping:</b> {data.shippingInformation}</p>
                <p><b>Return Policy:</b> {data.returnPolicy}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t">
                {data.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`
                      text-xs px-2 py-1 rounded-full
                      ${isDark ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-700"}
                    `}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
               onClick={()=>addToCart(data)}
               className={`
                  w-full py-3 mt-4 rounded-lg font-semibold transition
                  ${isDark
                    ? "bg-blue-700 hover:bg-blue-800 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"}
                `}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-10 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

            <div className="space-y-4">
              {data.reviews.slice(0, 3).map((review, index) => (
                <div
                  key={index}
                  className={`
                    p-4 rounded-lg border
                    ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}
                  `}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">{review.reviewerName}</p>
                    <span className="text-yellow-400">
                      {Array(review.rating).fill("★").join("")}
                    </span>
                  </div>
                  <p className="text-sm opacity-80">"{review.comment}"</p>
                  <p className="text-xs opacity-50 mt-1">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full text-xl opacity-70">
          Mahsulot yuklanmadi.
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
