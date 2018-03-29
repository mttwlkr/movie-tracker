import React, {Component} from 'react';
// import Login from '../../containers/Login/Login';
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleFetch = async (state) => {
    try {
      const response = await fetch('/api/users/new', {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          'content-type': 'application/json'
        }
      })
      const newAccount = await response.json();
      
      if (newAccount.error) {
        // 
      } else {
        <Redirect to='/login' />
      }
    } catch (error) {
      alert('error')
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleFetch(this.state)
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input 
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleChange}
        />
        <input 
          type='email'
          name='email'
          value={this.state.email}
          placeholder='Email'
          onChange={this.handleChange}
        />
        <input 
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Password'
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default SignUp