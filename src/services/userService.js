import axios from 'axios';

// Backend - URL
const API_BASE_URL = 'http://localhost:8080';


export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};


export const createUser = async (firstName, lastName) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, {
      firstName,
      lastName
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};