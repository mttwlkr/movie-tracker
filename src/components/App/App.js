import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Home } from '../Home/Home';
import { getNowPlaying } from '../../cleaners/fetchData';
import Login from '../Login/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: []
    }
  }

  async componentDidMount() {
    const nowPlaying = await getNowPlaying();
    this.setState({ movieData: nowPlaying })
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
          component={ () => <Home 
            movieData={this.state.movieData} />} 
        />
        <Route exact path='/login'
          component={ () => <Login />} 
        />
      </Switch>

      </div>
    );
  }
}

export default App;
