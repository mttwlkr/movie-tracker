import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Home } from '../Home/Home';
import { getNowPlaying, addToFavorites, loadAllFavorites } from '../../cleaners/fetchData';
import Login from '../../containers/Login/Login'
import { loadMovies, logOutUser, addFavorite } from '../../actions';
import SignUp from '../SignUp/SignUp.js'

export class App extends Component {
  
  async componentDidMount() {
    const nowPlaying = await getNowPlaying();
    this.props.loadMovies(nowPlaying);
  }

  logIn = () => {
    return (
      <NavLink 
        to='/login'
        className='nav'> 
        Log In / Sign Up
      </NavLink>
    );
  };

  logOut = () => {
    return (
      <div>
        <NavLink
          to='/' 
          className='log-out'
          onClick={ () => this.props.logOutUser() }>Log Out
        </NavLink>
        <NavLink 
          to='/favorites' 
          className='nav'
        >Show Favorites</NavLink>
      </div>
    );
  };

  // logOutFunctions = () => {
  //   this.props.logOutUser();
  //   this.props.clearFavorites();
  // }

  render() {
    const { user, movies, favorites } = this.props;

    return (
      <div className="App">
        <header>
        { !user.id ? this.logIn() : this.logOut()}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    movies: state.movies,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: (movies) => (dispatch(loadMovies(movies))),
    logOutUser: () => (dispatch(logOutUser())),
    // clearFavorites: () => (dispatch(clearFavorites()))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
