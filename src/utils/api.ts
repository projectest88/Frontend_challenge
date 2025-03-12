// src/utils/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://testcandidate.linkedinindonesia.com/api';

export const fetchProperties = async (params: {
  type?: string;
  status?: string;
  price_min?: number;
  price_max?: number;
  per_page?: number;
  page?: number;
}) => {
  try {
    const token = localStorage.getItem('token'); // Ensure correct retrieval
    const response = await axios.get(`${API_BASE_URL}/properties`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`, // Correctly interpolate the token
      },
    });
    // Handle the response
  } catch (error) {
    console.error('Error fetching properties:', error);
    // Handle the error
  }
};