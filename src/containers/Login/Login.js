import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewUser } from '../../actions';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  submitUsername = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.username, this.state.password);
    const path = "/";
    this.props.history.push(path);
  }

  render() {
    return (
      <form onSubmit={this.submitUsername}>
        <label htmlFor="username">Username: </label>
        <input 
          type='text' 
          id='username' 
          value={this.state.username} 
          placeholder='username'
          onChange={(event) => this.setState({ username: event.target.value })}
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
    handleSubmit: (username, password) => {
      dispatch(addNewUser(username, password));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
