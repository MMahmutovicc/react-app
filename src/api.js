import axios from "axios";

const BASE_URL =  process.env.REACT_APP_API_URL;

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, { username, password }, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};