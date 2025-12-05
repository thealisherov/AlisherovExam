import { useContext } from "react";
import { CartContext } from "../Contex/CartContext";
import { useNavigate } from "react-router-dom";
import { DarkContext } from "../Contex/DarkProvider";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, increment, decrement } =
    useContext(CartContext);

  const { isDark } = useContext(DarkContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const theme = {
    containerBg: isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900",
    itemCardBg: isDark ? "bg-gray-800 border-gray-700 shadow-xl" : "bg-white border-gray-200 shadow-lg",
    primaryButtonBg: isDark ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white",
    deleteButtonBg: isDark ? "bg-red-700 hover:bg-red-800 text-white" : "bg-red-500 hover:bg-red-600 text-white",
    secondaryButtonBg: isDark ? "bg-green-600 hover:bg-green-700 text-white" : "bg-green-500 hover:bg-green-600 text-white",
    borderColor: isDark ? "border-gray-700" : "border-gray-200",
  };

  return (
  <div className={`${theme.containerBg}`}  >
      <div
      className={`
        p-4 sm:p-6 md:p-8 max-w-6xl mx-auto min-h-[80vh] transition-colors duration-300
        ${theme.containerBg}
      `}
    >
      <h1 className="text-3xl font-extrabold mb-8 border-b pb-2 flex gap-2.5 gap-1.5">
      <FiShoppingCart/> Your Shopping Cart      </h1>

      {cart.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className={`
                  flex flex-col sm:flex-row gap-4 p-4 rounded-xl border
                  ${theme.itemCardBg}
                `}
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg border"
                  />
                </div>

                
                <div className="flex flex-grow flex-col justify-between">
                  <div className="mb-2">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-lg font-extrabold mt-1">
                      ${(item.price * item.quantity).toFixed(2)}{" "}
                      <span className="text-sm font-normal opacity-70">
                        (${item.price} each)
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => decrement(item.id)}
                        className={`cursor-pointer
                          w-8 h-8 flex items-center justify-center text-xl font-semibold transition-colors
                          ${theme.primaryButtonBg}
                        `}
                        aria-label="Decrement quantity"
                      >
                        −
                      </button>

                      <span
                        className={`cursor-pointer
                          w-10 h-8 flex items-center justify-center font-medium
                          ${isDark ? "bg-gray-700" : "bg-gray-100"}
                        `}
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increment(item.id)}
                        className={`
                          cursor-pointer
                          w-8 h-8 flex items-center justify-center text-xl font-semibold transition-colors
                          ${theme.primaryButtonBg}
                        `}
                        aria-label="Increment quantity"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={`cursor-pointer
                        px-3 py-1.5 rounded-lg font-medium transition-colors
                        ${theme.deleteButtonBg}
                      `}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="hidden lg:flex gap-2 self-start flex-wrap max-w-[150px]">
                  {item.images.slice(1, 3).map((image) => (
                    <div
                      key={image}
                      className="w-16 h-16 overflow-hidden rounded-md border"
                    >
                      <img
                        src={image}
                        alt={`${item.title} preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`
              md:col-span-1 p-6 rounded-xl border sticky top-4 self-start
              ${theme.itemCardBg}
            `}
          >
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Order Summary
            </h2>
            
            <div className="flex justify-between text-lg mb-2">
              <span>Items Subtotal:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg mb-6">
              <span>Shipping:</span>
              <span className="font-semibold">FREE</span>
            </div>
            
            <div className="flex justify-between text-2xl font-extrabold pt-4 border-t">
              <span>Order Total:</span>
              <span className="text-3xl">${total.toFixed(2)}</span>
            </div>

            <button
         
              className={`
                cursor-pointer
                mt-6 w-full py-3 rounded-lg text-xl font-semibold tracking-wide transition-all
                ${theme.secondaryButtonBg}
              `}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        /* Empty Cart State */
        <div className=" mt-10 p-10 border rounded-xl text-center max-w-md mx-auto">
          <h1 className="text-4xl font-light opacity-50 mb-4">
            Empty Cart
          </h1>
          <p className="text-lg mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button
            onClick={() => navigate("/all")}
            className={`cursor-pointer
              w-full py-3 rounded-lg text-lg font-semibold transition-colors
              ${theme.secondaryButtonBg}
            `}
          >
            <span className="mr-2">🛍️</span> Go Shopping
          </button>
        </div>
      )}
      
      {/* Retained original total display structure for fidelity when not empty */}
      {cart.length > 0 && (
          <div className={`
              text-right mt-8 border-t p-4 
              ${theme.borderColor}
          `}>
             <h2 className="text-2xl font-bold">
                Grand Total: ${total.toFixed(2)}
             </h2>
          </div>
      )}
    </div>
  </div>
  );
};

export default Cart;