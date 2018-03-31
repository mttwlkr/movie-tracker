import React from 'react';
import { connect }from 'react-redux';
import { Card } from '../Card/Card.js';
import './Home.css';
import { addFavorite } from '../../actions'

export const Home = ({ movies, addFavorite, user }) => {
  const displayMovies = movies.map((movie, index) => {
    return ( <Card 
      movieInfo={movie} 
      key={index}
      addFavorite={addFavorite}
      userId={user.id}
      />
    );
  });

  return (
    <div className='home-now-playing'>
      {displayMovies}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (id) => (dispatch(addFavorite(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
