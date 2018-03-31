import React from 'react';
import './Card.css';
import { addToFavorites } from '../../cleaners/fetchData';
import { addFavorite } from '../../actions/';
import { connect } from 'react-redux';

export const Card = ({ movieInfo, user, addFavorite, favorites }) => {
  const {title, poster_path, overview, vote_average, id, release_date} = movieInfo;

  const favoriteObj = {
    movie_id: id, 
    user_id: user.id,
    title: title, 
    poster_path: poster_path, 
    release_date: release_date, 
    vote_average: vote_average, 
    overview: overview
  }

  const addFavoritesToStore = async (favoriteObj) => {

    const isInFavorites = favorites.filter(favorite => {
      return favorite.id === favoriteObj.movie_id
    });

    if (!isInFavorites.length) {
      const favorite = await addToFavorites(favoriteObj)
      addFavorite(movieInfo)
    } else {
      // remove the movie from favorites
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
      <button onClick={ () => addFavoritesToStore(favoriteObj) }>favorite</button>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => (dispatch(addFavorite(movie))) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)




