// frontend/src/api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Ensure this is the correct URL and port for your backend
});

export const fetchQuestions = (params) => {
    return api.get('/questions', { params });
};
