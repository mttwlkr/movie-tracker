import React, { Component } from 'react';
import './Card.css';
import { addToFavorites } from '../../cleaners/addToFavorites.js'
import { removeFromFavorites } from '../../cleaners/removeFromFavorites.js';
import { addFavorite, removeFavorite } from '../../actions/';
import { connect } from 'react-redux';
import './Card.css'

export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    };
    this.userMovie = {
      ...this.props.movieInfo, 
      user_id: this.props.user.id
    }
  }

  addFavoritesToStore = (userMovie) => {

    const isInFavorites = this.props.favorites
      .filter(favorite => favorite.movie_id === this.props.movieInfo.movie_id);

    if (!isInFavorites.length) {
      addToFavorites(this.userMovie);
      this.props.addFavorite(this.userMovie);
    } else {
      this.props.removeFavorite(this.props.movieInfo.movie_id);
      removeFromFavorites(this.props.user.id, this.props.movieInfo.movie_id);
    }
  }

   validateUser = () => {  
    if (!this.props.user.id) {
      this.setState({ loggedIn: !this.state.loggedIn });
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
          {
            !this.state.loggedIn &&
          <textarea className='tile__title'>{overview}</textarea>
          }
          {
            this.state.loggedIn &&
            <textarea className='tile__title error'>Please login to your account</textarea>
          }
          <button 
            onClick={this.validateUser}
            className={`${this.props.selected}`}>
          </button>
      </div>
    </div>
    );
  };
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




