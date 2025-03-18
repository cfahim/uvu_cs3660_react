import axios from 'axios';

const BFF_BASE_URL = "https://o2dnwg37cd.execute-api.us-west-2.amazonaws.com/prod/api";

const defaultHeaders = {
    "Content-Type": "application/json"
};

const bffService = {
    login: async (username, password) => {
        try {
            const response = await axios.post(`${BFF_BASE_URL}/login/`, {
                username,
                password
            }, {
                headers: defaultHeaders
            });
            return response.data;
        }
        catch (error) {
            console.error("Login failed:", error);
            throw new Error("Login failed");
        }
    },
    getAllFilms: async (token) => {
        try {
            const response = await axios.get(`${BFF_BASE_URL}/swapi/films/`, {
                headers: {
                    ...defaultHeaders,
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.results;
        }
        catch (error) {
            console.error("Failed to fetch films:", error);
            throw new Error("Failed to fetch films");
        }
    },
}

export default bffService;