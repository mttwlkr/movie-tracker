import { apiKey } from './apiKeys';
import { cleanMovies } from './dataCleaner';

const rootUrl = 'https://api.themoviedb.org/3';
const nowPlaying = `/movie/now_playing?page=1&language=en-US&api_key=${apiKey}&language=en-US`;

export const getNowPlaying = async () => {

  try {
    const response = await fetch(`${rootUrl}${nowPlaying}`);
    const nowPlayingData = await response.json();
    const cleanedMovies = cleanMovies(nowPlayingData);

    return cleanedMovies;
  } catch (error) {
    throw new Error ('its bad');
  }
};


export const addToFavorites = async (movie) => {

  try {
    const response = await fetch('/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-type': 'application/json'
      }
    });
    const favoriteData = await response.json();

    return favoriteData;
  } catch (error) {
    console.log(error);
  }
}

export const removeFromFavorites = async (userId, movieId) => {
  const movieInfo = { 
    user_id: userId, 
    movie_id: movieId 
  } 

  try {
    const response = await fetch(`/api/users/${userId}/favorites/${movieId}/`, {
      method: 'DELETE',
      body: JSON.stringify(movieInfo),
      headers: {
        'content-type': 'application/json'
      }
    });
    const removedData = await response.json();

    return removedData;
  } catch (error) {
    console.log(error);
  }
}

export const loadAllFavorites = async (userId) => {

  try {
    const response = await fetch(`/api/users/${userId}/favorites/`);
    const favoriteData = await response.json();

    return favoriteData;
  } catch (error) {
    console.log(error);
  }
}