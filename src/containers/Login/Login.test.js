import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import * as actions from '../../actions/index';

describe('Login', () => {
	let wrapper, mockHandleSubmit, mockEvent;

	beforeEach(() => {
		mockHandleSubmit = jest.fn();
		mockEvent = {
			preventDefault: jest.fn()
		}
		wrapper = shallow(<Login 
			handleSubmit={mockHandleSubmit}/>);
	});

	it.skip('should match the snapshot', ()=> {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call handleSubmit when submit the form', () => {
		const username = 'jared';
		const password = 'hotstuff81';
		wrapper.instance().submitUsername(mockEvent);
		expect(mockHandleSubmit).toHaveBeenCalled();
	});

});