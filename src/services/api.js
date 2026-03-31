import axios from "axios";

const API = axios.create({
    baseURL: "https://news-app-v1-backend.onrender.com/api",
});

export const fetchNews = (query) => API.get(`/news?q=${query}`);