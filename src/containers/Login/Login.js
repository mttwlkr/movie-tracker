import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewUser } from '../../actions';

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}

	render() {
		const {handleSubmit, user} = this.props;

		return (
			<form onSubmit={(e) => {
				e.preventDefault() 
				handleSubmit(this.state.username, this.state.password)
			}}>
				<label htmlFor="username">Username: </label>
				<input 
					type='text' 
					id='username' 
					value={this.state.username} 
					placeholder='username'
					onChange={(e) => this.setState({ username: e.target.value })}
				/>
				<label htmlFor="password">Password: </label>
				<input 
					type='password' 
					id='password' 
					value={this.state.password} 
					placeholder='password'
					onChange={(e) => this.setState({ password: e.target.value })}
				/>
				<button>submit</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (username, password) => {
      dispatch(addNewUser(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
