import React from 'react';
import { connect }from 'react-redux';
import { Card } from '../Card/Card.js';
import './Home.css';

export const Home = ({movies}) => {
  const displayMovies = movies.map((movie, index) => {
    return ( <Card 
      movieInfo={movie} 
      key={index}/>
    );
  });

  return (
    <div className='home-now-playing'>
      {displayMovies}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Home);
