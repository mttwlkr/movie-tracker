import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Home } from '../Home/Home';
import { addToFavorites } from '../../cleaners/addToFavorites';
import Login from '../../containers/Login/Login';
import { loadMovies, logOutUser, addFavorite, clearFavoritesLogOut } from '../../actions';
import SignUp from '../SignUp/SignUp.js';
import { getNowPlaying } from '../../cleaners/getNowPlaying';
import { loadAllFavorites } from '../../cleaners/loadAllFavorites';

export class App extends Component {
  
  async componentDidMount() {
    const nowPlaying = await getNowPlaying();

    this.props.loadMovies(nowPlaying);
  }

  displayLogIn = () => {
    return (
      <NavLink 
        to='/login'
        className='nav'> 
        Log In / Sign Up
      </NavLink>
    );
  };

  displayLogOut = () => {
    const { pathname } = this.props.location;

    return (
      <div className='nav-menu'>
      <h3>{`Hey, ${this.props.user.name} !`}</h3>
       <NavLink
          to='/' 
          className='log-out'
          onClick={this.handleLogOut}>
          Log Out
        </NavLink>
        { pathname === '/' ? this.showFavorites() : this.showHome() }
      </div>
    );
  };

  showFavorites = () => {
    return ( 
      <NavLink 
        to='/favorites' 
        className='show-favorites'>
        Show Favorites
      </NavLink>  
    )
  }

  showHome = () => {
    return (
      <NavLink to='/'>Home</NavLink>
    )
  }


  handleLogOut = () => {
    this.props.logOutUser();
    this.props.clearFavoritesLogOut();
  }

  render() {
    const { user, movies, favorites } = this.props;

    return (
      <div className="App">
        <header>
        { !user.id ? this.displayLogIn() : this.displayLogOut()}
        <h1>Movie Tracker</h1>
        </header>

        <Switch>
          <Route exact path='/' 
            render={ () => <Home 
              movies={movies} 
              favorites={favorites} />} 
          />
          <Route exact path='/login'
            component={Login} 
          />
          <Route exact path='/signup'
            component={SignUp}
          />
          <Route exact path='/favorites'
            render={ () => <Home 
              movies={favorites} 
              favorites={favorites} />}
          />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user,
    movies: state.movies,
    favorites: state.favorites
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: (movies) => (dispatch(loadMovies(movies))),
    logOutUser: () => (dispatch(logOutUser())),
    clearFavoritesLogOut: () => (dispatch(clearFavoritesLogOut()))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
