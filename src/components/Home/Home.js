import React from 'react';
import Card from '../Card/Card.js';
import './Home.css';


export const Home = ({ movies, favorites }) => {
  const displayMovies = movies.map((movie, index) => 
    {
      let selected = '';
      favorites.forEach(favorite => {
        if (favorite.movie_id === movie.movie_id) {
          selected = 'selected';
        }
      });

      return ( <Card 
        movieInfo={movie} 
        key={index}
        selected={selected}
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