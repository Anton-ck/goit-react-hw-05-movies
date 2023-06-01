import axios from 'axios';

const KEY = '292fb79ad255ff04db0087dc349cbd4a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const trendingMovies = await axios
    .get(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
    .catch(error => {
      return new Error(error);
    });
  return trendingMovies;
};

export const getMovieDetails = async movieId => {
  const movieDetails = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}`
  );

  return movieDetails;
};

export const getMoviesCast = async movieId => {
  const movieCast = await axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`);
  
  return movieCast;
};

export const getMoviesReviews = async movieId => {
  const movieReviews = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );

  return movieReviews;
};

export const getMovies = async query => {
  const movies = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${KEY}`
  );

  return movies;
};