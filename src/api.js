import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2U4ZmI0Yzk5NWZiODYyZWJiNWIzY2IzZjYwZTM3MyIsIm5iZiI6MTc0MzI3MDMyMC45NTgwMDAyLCJzdWIiOiI2N2U4MzFiMDZiMzY3ZDQ2OTU2N2NjN2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zH7KT93dAGiP1939ykNtJUF4QvWPNFxznG7NlIm3fQ8"; // Вставте ваш API-токен
const BASE_URL = "https://api.themoviedb.org/3";

// Створюємо інстанс axios з базовими налаштуваннями
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

// Отримання популярних фільмів (Trending movies)
export const fetchPopularMovies = async () => {
  try {
    const response = await api.get("/trending/movie/day?language=en-US");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// Пошук фільмів за ключовим словом
export const searchMovies = async (query) => {
  try {
    const response = await api.get(`/search/movie?query=${query}&language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

// Отримання деталей фільму
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

// Отримання акторського складу фільму (Movie credits)
export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/credits?language=en-US`);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
};

// Отримання оглядів фільму (Movie reviews)
export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/reviews?language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};
