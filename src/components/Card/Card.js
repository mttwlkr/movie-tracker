import React from 'react';
import './Card.css';
import { addToFavorites } from '../../cleaners/fetchData'

export const Card = ({ movieInfo, userId }) => {
  const {title, poster_path, overview, vote_average, id, release_date} = movieInfo;

  const favoriteObj = {
    movie_id: id, 
    user_id: userId, 
    title: title, 
    poster_path: poster_path, 
    release_date: release_date, 
    vote_average: vote_average, 
    overview: overview
  }

  return (
    <div className='card'>
      <h1>{title}</h1>
      <img className='card-image'
           src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
           alt='movie poster' />
      <p>{overview}</p>
      <p>{vote_average}</p>
      <button onClick={ () => addToFavorites(favoriteObj) }>favorite</button>
    </div>
  );
};
