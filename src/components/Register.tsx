'use client';

import { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';

export default function Register({ onRegisterSuccess }: { onRegisterSuccess: () => void }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [error, setError] = useState('');
  const setUser = useAuthStore((state) => state.setUser); // Ambil fungsi setUser dari Zustand store

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    if (!formData.email || !formData.password || !formData.phoneNumber || !formData.firstName || !formData.lastName) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('https://api.example.com/register', formData);
      console.log('Registration successful:', response.data);
      setUser({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
      });

      onRegisterSuccess();
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium">Set Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-full bg-red-500 cursor-pointer text-white py-2 rounded-md hover:bg-red-600"
              >
                Sign Up
              </button>
            </div>
          </form> 

          <p className="text-center mt-4 text-sm">
            Already Have An Account?{' '}
            <Link href="/login" className="text-black font-semibold">
              Log In
            </Link>
          </p>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="flex items-center justify-center w-full cursor-pointer border py-2 rounded-md hover:bg-gray-100">
            Sign up with Google
          </button>
        </div>
      </div>

  );
}