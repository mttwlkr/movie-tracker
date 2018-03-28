import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}

	render() {

		return (
			<form onSubmit={(e) => {
				e.preventDefault() 
				// handleSubmit(this.state)
			}}>
				<label for="username">Username: </label>
				<input 
					type='text' 
					id='username' 
					value={this.state.username} 
					placeholder='username'
					onChange={(e) => this.setState({ username: e.target.value })}
				/>
				<label for="password">Password: </label>
				<input 
					type='password' 
					id='password' 
					value={this.state.password} 
					placeholder='password'
					onChange={(e) => this.setState({ password: e.target.value })}
				/>
				<NavLink to='/home'>Sign in</NavLink>
			</form>
		)
	}
}