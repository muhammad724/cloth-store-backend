import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),

     updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      set((state) => ({
        cart: state.cart.filter((item) => item._id !== productId),
      }));
    } else {
      set((state) => ({
        cart: state.cart.map((item) =>
          item._id === productId ? { ...item, quantity } : item
        ),
      }));
    }
  },

  // Clear cart
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;