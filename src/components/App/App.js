import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Home } from '../Home/Home';
import { addToFavorites} from '../../cleaners/fetchData';
import Login from '../../containers/Login/Login'
import { loadMovies, logOutUser, addFavorite, addAllFavorites } from '../../actions';
import SignUp from '../SignUp/SignUp.js'
import { getNowPlaying } from '../../cleaners/getNowPlaying'
// import { cleanMovies } from '../../cleaners/cleanMovies'
import { loadAllFavorites } from '../../cleaners/loadAllFavorites'

export class App extends Component {
  
  async componentDidMount() {
    const nowPlaying = await getNowPlaying();
    //const cleanedMovies = await cleanMovies(nowPlaying);
    this.props.loadMovies(nowPlaying);
  }

  showFavorites = async () => {
    const allFavorites = await loadAllFavorites(this.props.user.id);
    
    this.props.addAllFavorites(allFavorites);
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
        <button 
        className='log-out-button'
        onClick={ () => this.props.logOutUser() }>Log Out</button>
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
    addAllFavorites: (movies) => (dispatch(addAllFavorites(movies)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
