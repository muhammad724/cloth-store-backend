import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://store-backend-indol.vercel.app/users/login",
        {
          email,
          password,
        }
      );

      console.log("Login success:", data);

      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/cart");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="relative min-h-screen">
    
    {/* Background Image */}
    <img 
      src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=1200&auto=format&fit=crop&q=80"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/90 p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C9A24D] text-black py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-md disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?
          <Link
            to="/register"
            className="text-[#C9A24D] font-semibold ml-1 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  </div>
);
}