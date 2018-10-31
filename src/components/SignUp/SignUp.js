import React, {Component} from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      authenticated: false,
      signUpError: false
    };
  }

  handleFetch = async (state) => {
    try {
      const response = await fetch('/api/users/new', {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          'content-type': 'application/json'
        }
      });
      const newAccount = await response.json();
     
      if (newAccount.error) {
        this.setState({ signUpError: true });
      } else {
        this.setState({ authenticated: true });
      }

    } catch (error) {
      alert(error);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const info = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.handleFetch(info);
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='name'
            id='name'
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <input 
            type='email'
            name='email'
            id='email'
            value={this.state.email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <input 
            type='password'
            name='password'
            id='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.handleChange}
          />
          <button className='submit'>Submit</button>
        </form>
        { 
          this.state.signUpError &&
            <section>
              <p>This email has already been used</p>
              <NavLink to="/login">Already a member?</NavLink>
            </section>
        }
        {
          this.state.authenticated && 
            <Redirect to='/login' />
        }
      </div>
    );
  }
}

export default SignUp;