import React from 'react';
import Card from '../Card/Card.js';
import './Home.css';


export const Home = ({ movies }) => {
  const displayMovies = movies.map((movie, index) => {
    return ( <Card 
      movieInfo={movie} 
      key={index}
      />
    );
  });

  return (
    <div className='row'>
      <div className='row__inner'>
        {displayMovies}
      </div>
    </div>
  );
};