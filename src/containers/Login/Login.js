import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';
import { logInUser, addAllFavorites } from '../../actions';
import { loadAllFavorites } from '../../cleaners/loadAllFavorites.js';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: false
    };
  }

  submitEmail = (event) => {
    event.preventDefault();
    const userInfo = { email: this.state.email, password: this.state.password };
    this.logIn(userInfo);
  }

  logIn = async (userInfo) => {
    try {
      const response = await fetch('/api/users', {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          'content-type': 'application/json'
        }
      });
      const logInData = await response.json();
      
      this.redirectUser(logInData.data.id, logInData.data.name);
      this.showFavorites(logInData.data.id);
    } catch (error){
      this.setState({error: true});
    }
  }

  showFavorites = async (userId) => {
    const allFavorites = await loadAllFavorites(userId);

    this.props.addAllFavorites(allFavorites);
  }

  redirectUser = (id, name) => {
    this.props.handleSubmit(id, name);
    const path = "/";
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitEmail}>
          <input 
            type='text' 
            id='email' 
            value={this.state.email} 
            placeholder='Email'
            onChange={(event) => this.setState({ 
              email: event.target.value })}
          />
          <input 
            type='password' 
            id='password' 
            value={this.state.password} 
            placeholder='Password'
            onChange={(event) => this.setState({ 
              password: event.target.value })}
          />
          <button className='submit'>Submit</button>
        </form>
        { this.state.error &&
            <section>
              <p>Email and password do not match, please try again.</p>
              <NavLink to="/signup">Sign Up</NavLink>
            </section>
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (id, name) => (dispatch(logInUser(id, name))),
    addAllFavorites: (movies) => (dispatch(addAllFavorites(movies)))
  };
};  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

Login.propTypes = {
  history: PropTypes.array,
  handleSubmit: PropTypes.func,
  addAllFavorites: PropTypes.func
};