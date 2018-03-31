import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import { getNowPlaying, addToFavorites } from '../../cleaners/fetchData';
import Login from '../../containers/Login/Login'
import { loadMovies, logOutUser, addFavorite } from '../../actions';
import SignUp from '../SignUp/SignUp.js'

export class App extends Component {
  
  async componentDidMount() {
    const nowPlaying = await getNowPlaying();
    this.props.loadMovies(nowPlaying.results);
  }

  logIn = () => {
    return (
      <NavLink 
        to='/login'
        className='nav'> 
        Log in / Sign up
      </NavLink>
    );
  };

  logOut = () => {
    return (
      <button onClick={ () => this.props.logOutUser() }>Log Out</button>
    );
  };

  render() {

    return (
      <div className="App">
        <header>
        { !this.props.user.id ? this.logIn() : this.logOut()}
        </header>
        <Switch>
          <Route exact path='/' 
            component={ () => <Home />} 
          />
          <Route exact path='/login'
            component={ () => <Login />} 
          />
          <Route exact path='/signup'
            component={ () => <SignUp />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    // movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: (movies) => (dispatch(loadMovies(movies))),
    logOutUser: () => (dispatch(logOutUser())),
    // addFavorite: (id) => (dispatch(addFavorite(id)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
