import React, { useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import useCartStore from "../context/CartStore";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

const Product = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: async () => {
      const url =
        selectedCategory === "All"
          ? "http://localhost:3000/product"
          : `http://localhost:3000/product?category=${selectedCategory}`;

      const { data } = await axios.get(url);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <h1>Error loading products</h1>;

  return (

    <div>
    <header className="fixed inset-x-0 top-0 z-50"> <nav className="flex items-center justify-between px-6 py-4 lg:px-10 backdrop-blur-md bg-black/80"> {/* Brand */} <div className="flex lg:flex-1"> <a href="#" className="text-3xl font-extrabold bg-clip-text text-[#C9A24D]"> Store </a> </div> {/* Mobile menu button */} <div className="flex lg:hidden"> <button onClick={() => setMobileMenuOpen(true)} className="rounded-md p-2 text-gray-200 hover:bg-white/10" > <Menu className="size-6" /> </button> </div> <div className="hidden lg:flex lg:gap-x-10"> {navigation.map((item) => ( <a key={item.name} href={item.href} className="relative text-lg font-semibold text-gray-200 hover:text-[#C9A24D] transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#C9A24D] after:to-[#C9A24D] hover:after:w-full after:transition-all" > {item.name} </a> ))} </div> {/* CTA */} <div className="hidden lg:flex lg:flex-1 lg:justify-end"> <a href="#" className="rounded-full bg-[#C9A24D] px-8 py-2 text-sm font-semibold text-[#0B0B0B] hover:opacity-90 transition" > Login </a> </div> </nav> <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden"> <div className="fixed inset-0 bg-black/60" /> <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0B0B0B] p-6"> <div className="flex items-center justify-between"> <span className="text-xl font-bold bg-gradient-to-r from-[#C9A24D] to-[#C9A24D] bg-clip-text text-transparent"> Store </span> <button onClick={() => setMobileMenuOpen(false)}> <X className="size-6 text-white" /> </button> </div> <div className="mt-8 space-y-4"> {navigation.map((item) => ( <a key={item.name} href={item.href} className="block text-lg font-semibold text-gray-200 hover:text-[#C9A24D]" > {item.name} </a> ))} </div> <div className="mt-8"> <a className="block rounded-lg bg-[#C9A24D] px-4 py-3 text-center font-semibold text-[#0B0B0B] hover:opacity-90"> Login </a> </div> </DialogPanel> </Dialog> </header>




      <section className="relative w-full h-screen overflow-hidden">
         <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=2400&q=100"
          alt="Fashion Collection" className="absolute inset-0 w-full h-full object-cover" /> 
          <div className="absolute inset-0 bg-black/50"></div> 
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"> 
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> Timeless Fashion </h1> 
            <button className="px-8 py-3 bg-[#C9A24D] text-black font-semibold rounded-md hover:opacity-90 transition"> Shop Now </button>
             </div> 
      </section>

      <div className="flex gap-4 mb-8 justify-center mt-24">
        {["All", "tshirt", "shirt", "hoodie", "jeans", "jacket", "accessories"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-[#C9A24D] text-black"
                : "border-[#C9A24D] text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-8xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative w-full h-72 bg-[#F8F8F8] flex items-center justify-center overflow-hidden">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="max-h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-500 text-xs mb-3">{product.category}</p>
              <p className="text-[#C9A24D] font-bold text-lg mb-4">
                ${product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-auto bg-[#C9A24D] text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING CART */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/Cart"
          className="relative bg-[#C9A24D] text-black rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>

    </div>
  );
};

export default Product;
