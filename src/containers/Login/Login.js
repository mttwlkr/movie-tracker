import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser } from '../../actions';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  submitEmail = (event) => {
    event.preventDefault();
    this.logIn(this.state)

  }

  logIn = async (data) => {
    try {
      const response = await fetch('/api/users', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      });
      const logInData = await response.json();
      this.redirectUser(logInData.data.id, logInData.data.name)

    } catch (error){
      // throw new Error('Login failed')
      console.log('you are a bad bad human')
    }
  }

  redirectUser = (id, name) => {
    this.props.handleSubmit(id, name);
    const path = "/";
    this.props.history.push(path);    
  }

  render() {
    return (
      <form onSubmit={this.submitEmail}>
        <label htmlFor="email">email: </label>
        <input 
          type='text' 
          id='email' 
          value={this.state.email} 
          placeholder='email'
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <label htmlFor="password">Password: </label>
        <input 
          type='password' 
          id='password' 
          value={this.state.password} 
          placeholder='password'
          onChange={(event) => this.setState({ password: event.target.value })}
        />
        <button>submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (id, name) => {
      dispatch(logInUser(id, name));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
