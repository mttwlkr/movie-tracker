import React from 'react';
import './Card.css'

export const Card = ({movieInfo}) => {
  console.log(movieInfo.poster_path)
  const {title, poster_path, overview, vote_average} = movieInfo
  return (
    <div className='card'>
      <h1>{title}</h1>
      <img className='card-image'
           src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <p>{overview}</p>
      <p>{vote_average}</p>
    </div>
  )
}
