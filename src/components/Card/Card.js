import React from 'react';
import './Card.css';
import { addToFavorites, removeFromFavorites } from '../../cleaners/fetchData';
import { addFavorite, removeFavorite } from '../../actions/';
import { connect } from 'react-redux';

export const Card = ({ movieInfo, user, addFavorite, favorites, removeFavorite }) => {
  const userMovie = {...movieInfo, user_id: user.id};
  const {title, poster_path, overview, vote_average, movie_id, user_id, release_date} = userMovie;

  const addFavoritesToStore = async (userMovie) => {

    const isInFavorites = favorites.filter(favorite => {
      return favorite.movie_id === movie_id
    });

    if (!isInFavorites.length) {
      addToFavorites(userMovie);
      addFavorite(userMovie);
    } else {
      removeFavorite(movie_id)
      removeFromFavorites(user_id, movie_id);
    }
  }

  return (
    <div className='card'>
      <h1>{title}</h1>
      <img className='card-image'
           src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
           alt='movie poster' />
      <p>{overview}</p>
      <p>{vote_average}</p>
      <button onClick={ () => addFavoritesToStore(userMovie) }>favorite</button>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => (dispatch(addFavorite(movie))),
  removeFavorite: (movie_id) => (dispatch(removeFavorite(movie_id))) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Card)




