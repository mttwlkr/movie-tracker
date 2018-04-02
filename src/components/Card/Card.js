import React, { Component } from 'react';
import './Card.css';
import { addToFavorites } from '../../cleaners/addToFavorites.js'
import { removeFromFavorites } from '../../cleaners/removeFromFavorites.js';
import { addFavorite, removeFavorite } from '../../actions/';
import { connect } from 'react-redux';


export class Card extends Component {
  constructor(props) {
    super(props)
    this.userMovie = {...this.props.movieInfo, user_id: this.props.user.id}
  }

  addFavoritesToStore = (userMovie) => {
    const isInFavorites = this.props.favorites
      .filter(favorite => favorite.movie_id === this.props.movieInfo.movie_id);

    if (!isInFavorites.length) {
      addToFavorites(userMovie);
      addFavorite(userMovie);
    } else {
      removeFavorite(this.props.movieInfo.movie_id)
      removeFromFavorites(this.props.user.id, this.props.movieInfo.movie_id);
    }
  }

  validateUser = () => {  
    if (!this.props.user.id) {
      alert('Please log in or sign up to add favorites')
    } else {
      this.addFavoritesToStore(this.userMovie);
    }
  }

  render () {
    const { poster_path, title, overview } = this.props.movieInfo
    return (
      <div className='tile'>
        <img className='tile__img'
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt='movie poster' />
        <div className='card-details'>
          <h2>{title}</h2>
          <textarea className='tile__title'>{overview}</textarea>
          <button 
            onClick={this.validateUser}
            className={`${this.props.selected}`}>
            favorite</button>
        </div>
      </div>
    );
  }
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




