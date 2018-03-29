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