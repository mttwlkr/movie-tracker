import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Home } from '../Home/Home';
import { getNowPlaying, addToFavorites, loadAllFavorites } from '../../cleaners/fetchData';
import Login from '../../containers/Login/Login'
import { loadMovies, logOutUser, addFavorite, addAllFavorites } from '../../actions';
import SignUp from '../SignUp/SignUp.js'

export class App extends Component {
  
  async componentDidMount() {
    const nowPlaying = await getNowPlaying();
    this.props.loadMovies(nowPlaying);
  }

  showFavorites = async () => {
    const allFavorites = await loadAllFavorites(this.props.user.id);
    console.log(allFavorites);
    
    this.props.addAllFavorites(allFavorites.data);
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
      <div>
        <button onClick={ () => this.props.logOutUser() }>Log Out</button>
        <NavLink 
          to='/favorites' 
          className='nav'
          onClick={this.showFavorites}>
          Show Favorites
        </NavLink>
      </div>
    );
  };

  render() {
    const { user, movies, favorites } = this.props;

    return (
      <div className="App">
        <header>
        { !user.id ? this.logIn() : this.logOut()}
        </header>

        <Switch>
          <Route exact path='/' 
            render={ () => <Home movies={movies} />} 
          />
          <Route exact path='/login'
            component={Login} 
          />
          <Route exact path='/signup'
            component={SignUp}
          />
          <Route exact path='/favorites'
            render={ () => <Home movies={favorites} />}
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
    addAllFavorites: (movies) => (dispatch(addAllFavorites(movies)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
