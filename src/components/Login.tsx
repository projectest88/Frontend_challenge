'use client';

import { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '@/store/authStore';
import LoginLayout from '@/components/LoginLayout';
import Link from 'next/link';

export default function Login({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const setUser = useAuthStore((state) => state.setUser); // Ambil fungsi setUser dari Zustand store

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await axios.post('https://testcandidate.linkedinindonesia.com/api/login', formData);

      console.log('Login successful:', response.data);
      setUser(response.data.user);
      
      onLoginSuccess();
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <LoginLayout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-6">Log in</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-2 border rounded-md"
                required
              />
            </div> 
            <button
              type="submit"
              className="w-full bg-blue-500 cursor-pointer text-white py-2 rounded-md hover:bg-blue-600"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="w-full p-2 bg-red-500 cursor-pointer text-white rounded-md hover:bg-red-600">
            Log in with Google
          </button> 

          <p className="mt-6 text-center">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </LoginLayout>
  );
}
