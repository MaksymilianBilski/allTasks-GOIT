import axios from 'axios';

const API_MOVIE_KEY = 'e49decb7b714a95bd454096b6ce610cd';
const moviesFind = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const fetchTrending = async () => {
  try {
    const response = await moviesFind.get(
      `trending/all/day?api_key=${API_MOVIE_KEY}`
    );
    return response.data;
  } catch (e) {
    return;
  }
};

const fetchDetails = async id => {
  try {
    const response = await moviesFind.get(
      `movie/${id}?api_key=${API_MOVIE_KEY}`
    );
    return response.data;
  } catch (e) {
    return;
  }
};

const fetchCast = async id => {
  try {
    const response = await moviesFind.get(
      `movie/${id}/credits?api_key=${API_MOVIE_KEY}`
    );
    return response.data;
  } catch (e) {
    return;
  }
};

const fetchReviews = async id => {
  try {
    const response = await moviesFind.get(
      `movie/${id}/reviews?api_key=${API_MOVIE_KEY}`
    );
    return response.data;
  } catch (e) {
    return;
  }
};

const fetchByQuery = async query => {
  try {
    const response = await moviesFind.get(
      `search/movie?api_key=${API_MOVIE_KEY}&page=1&query=${query}`
    );
    return response.data;
  } catch (e) {
    return;
  }
};

export { fetchTrending, fetchDetails, fetchCast, fetchReviews, fetchByQuery };
