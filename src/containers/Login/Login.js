import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser } from '../../actions';
import './Login.css';

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
    const userInfo = {email: this.state.email, password: this.state.password}
    this.logIn(userInfo)
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
      this.setState({error: true})
    }
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
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <input 
            type='password' 
            id='password' 
            value={this.state.password} 
            placeholder='Password'
            onChange={(event) => this.setState({ password: event.target.value })}
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
    handleSubmit: (id, name) => {
      dispatch(logInUser(id, name));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
