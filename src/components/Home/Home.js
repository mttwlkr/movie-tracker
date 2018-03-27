import React from 'react';

export const Home = ({movieData}) => {
  let displayMovies;
  
  if(movieData.results) {
    displayMovies = movieData.results.map(movie => {
      return (<li>{movie.title}</li>)
    })
  }

  return (
    <div>
      {displayMovies}
    </div>
  )
}