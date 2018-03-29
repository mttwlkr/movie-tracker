import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import { getNowPlaying } from '../../cleaners/fetchData';
import Login from '../../containers/Login/Login';
import { loadMovies } from '../../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logIn: [],
      newUserID: ''
    }
  }
  
  async componentDidMount() {
    const nowPlaying = await getNowPlaying();
    this.props.loadMovies(nowPlaying.results);
    this.logIn({email: 'tman2272@aol.com', password: 'password'})
    this.createNewAccount({
      name: 'jared', 
      email: 'hottstuff81@aol.net', 
      password: 'hottie'
    })
  }

  logIn = async (data) => {
    const response = await fetch('/api/users', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    });
    const logInData = await response.json();
    this.setState({ 
      logIn : 
        { email: logInData.data.email,
          name: logInData.data.name
        }
     })
  }

  createNewAccount = async (data) => {
    const response = await fetch('/api/users/new', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })
    const newAccount = await response.json();
    this.setState({newUserID: newAccount.id})
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
