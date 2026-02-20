import React, { useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router"; // fixed import
import useCartStore from "../context/CartStore";
import useCountContext from "../context/CountStore";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const { count } = useCountContext();

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);


  const total = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;
        return sum + price * quantity;
      }, 0),
    [cart]
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    const qty = Number(newQuantity);
    if (isNaN(qty) || qty < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, qty);
    }
  };

  const handleCheckout = () => navigate("/checkout");
  const handleContinueShopping = () => navigate("/products");

  return (
    <div className="bg-[#F5F1EB] min-h-screen text-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back button */}
        <button
          onClick={handleContinueShopping}
          className="mb-6 flex items-center text-[#C9A24D] hover:text-black transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Continue Shopping
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-6">Your Cart ({cart.length})</h2>

            {cart.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <svg
                  className="w-24 h-24 mx-auto text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-gray-600 mb-4">Your cart is empty.</p>
                <Link
                  to="/"
                  className="bg-[#C9A24D] text-black font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              cart.map((item) => {
                const quantity = Number(item.quantity) || 1; // Ensure it's a number
                return (
                  <div
                    key={item._id}
                    className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.images?.[0] || "https://via.placeholder.com/80"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/80")}
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category || "Uncategorized"}</p>
                        <p className="text-[#C9A24D] font-bold">
                          ${Number(item.price)?.toFixed(2) || "0.00"}
                        </p>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item._id, quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item._id, quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="ml-4 text-red-600 hover:text-red-800 transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {cart.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-[#C9A24D]">${total.toFixed(2)}</span>
                </div>

                <Link
                  onClick={handleCheckout}
                  to="/login"
                  className="w-full py-4 px-22 bg-[#C9A24D] text-black font-semibold rounded-lg hover:opacity-90 transition"
                >
                  Proceed to Checkout
                </Link>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Shipping & taxes calculated at checkout
                </p>

                <div className="mt-4 text-xs text-gray-400 text-center">Cart count: {count}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
