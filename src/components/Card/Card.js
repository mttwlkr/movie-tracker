import React from 'react';
import './Card.css';
import { addToFavorites, removeFromFavorites } from '../../cleaners/fetchData';
import { addFavorite, removeFavorite } from '../../actions/';
import { connect } from 'react-redux';

export const Card = ({ movieInfo, user, addFavorite, favorites, removeFavorite, selected }) => {

  const userMovie = {...movieInfo, user_id: user.id};
  const {title, poster_path, overview, vote_average, movie_id, user_id, release_date} = userMovie;

  const addFavoritesToStore = (userMovie) => {

    const isInFavorites = favorites.filter(favorite => {
      return favorite.movie_id === movie_id;
    });

    if (!isInFavorites.length) {
      addToFavorites(userMovie);
      addFavorite(userMovie);
    } else {
      removeFavorite(movie_id)
      removeFromFavorites(user_id, movie_id);
    }
  }

  const validateUser = () => {  
    if (!user.id) {
      alert('Please log in or sign up to add favorites')
    } else {
      addFavoritesToStore(userMovie);

    }
  }

  return (
    <div className='tile'>
      <img className='tile__img'
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt='movie poster' />
      <div className='card-details'>
        <h2>{title}</h2>
        <textarea className='tile__title'>{overview}</textarea>
        <button 
          onClick={() => validateUser()}
          className={`${selected}`}>
          favorite</button>
      </div>
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




