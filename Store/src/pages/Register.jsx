import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router'

const Register = () => {

  const schema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters').max(24, 'Name must be less than 100 characters').required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    age: yup
      .number()
      .typeError("Age is required")
      .min(8, 'You must be at least 13 years old')
      .max(100, 'You must be at most 100 years old')
      .required('Age is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const registerUser = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/users', data);
      console.log('User registered successfully:', response.data);
      alert('Registration successful! Please login.');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F1EB] px-4">
      
      <form 
        onSubmit={handleSubmit(registerUser)}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6"
      >
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            {...register("age")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#C9A24D] text-white py-2 rounded-lg font-semibold hover:bg-[#c18c5d] transition duration-300"
        >
          Register
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account? 
          <Link to="/login" className="text-[#D4A373] font-medium cursor-pointer ml-1 hover:underline">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Register;
