import React, { Component } from 'react';
import './App.css';
import { apiKey } from '../../cleaners/apiKey.js';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home/Home';
import { getNowPlaying } from '../../cleaners/fetchData'

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
      <Switch>
        <Route exact path='/' 
          component={ () => <Home movieData={this.state.movieData} />} 
        />
      </Switch>

      </div>
    );
  }
}

export default App;
