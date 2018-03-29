import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import { getNowPlaying } from '../../cleaners/fetchData';
import Login from '../../containers/Login/Login';
import { loadMovies } from '../../actions';

class App extends Component {
  
  async componentDidMount() {
    const nowPlaying = await getNowPlaying();
    this.props.loadMovies(nowPlaying.results);
  }

  render() {

    return (
      <div className="App">
        <header>
          <NavLink 
            to='/login'
            className='nav'> 
            Sign in / Sign up
          </NavLink>
        </header>
        <Switch>
          <Route exact path='/' 
            component={ () => <Home />} 
          />
          <Route exact path='/login'
            component={ () => <Login />} 
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: (movies) => {
      dispatch(loadMovies(movies));
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
