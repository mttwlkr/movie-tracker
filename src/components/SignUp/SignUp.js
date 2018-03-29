import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
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