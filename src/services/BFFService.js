import axios from 'axios';

const BFF_BASE_URL = "http://localhost:8000/api";

const defaultHeaders = {
    "Content-Type": "application/json"
};

const bffService = {
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