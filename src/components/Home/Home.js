import React from 'react';
import { Card } from '../Card/Card.js';
import './Home.css';

export const Home = ({movieData}) => {
  let displayMovies;
  
  if(movieData.results) {
    displayMovies = movieData.results.map((movie, index) => {
      return (<Card movieInfo={movie} key={index}/>)
    })
  }

  return (
    <div className='home-now-playing'>
      {displayMovies}
    </div>
  )
}