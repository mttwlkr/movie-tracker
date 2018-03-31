import { apiKey } from './apiKeys';

const rootUrl = 'https://api.themoviedb.org/3';
const nowPlaying = `/movie/now_playing?page=1&language=en-US&api_key=${apiKey}&language=en-US`;

export const getNowPlaying = async () => {

  try {
    const response = await fetch(`${rootUrl}${nowPlaying}`);
    const nowPlayingData = await response.json();

    return nowPlayingData;
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

  try {
    const response = await fetch(`/api/users/${userId}/favorites/${movieId}`, {
      method: 'DELETE',
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