import { useContext } from "react";
import { CartContext } from "../Contex/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increment, decrement } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => decrement(item.id)}
                className="px-2 bg-gray-300 rounded"
              >
                -
              </button>
              <button
                onClick={() => increment(item.id)}
                className="px-2 bg-gray-300 rounded"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
