import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data.error;
    }
};

export const loginUser = async (userData) => {
    try {
        return await axios.post(`${API_URL}/login`, userData);
    } catch (error) {
        throw error.response.data.error;
    }
}