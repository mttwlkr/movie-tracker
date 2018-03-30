import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import * as actions from '../../actions/index';

describe('Login', () => {
  let wrapper, 
  mockHandleSubmit, 
  mockEvent, 
  mockHistory,
  mockLogin;

  beforeEach(() => {
    mockHandleSubmit = jest.fn();
    mockEvent = {
      preventDefault: jest.fn()
    };
    mockHistory = [];
    wrapper = shallow(<Login 
      handleSubmit={mockHandleSubmit}
      history={mockHistory} />);
  });

  it.skip('should match the snapshot', ()=> {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call submitEmail when submit the form', () => {
    const email = 'tman1000@gmail.com';
    const password = 'hotstuff81';

    const spy = jest.spyOn(wrapper.instance(), 'logIn');
    wrapper.instance().submitEmail(mockEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleSubmit when redirectUser is called', () => {
    const id = '122345';
    const name = 'jared';

    wrapper.instance().redirectUser(id, name);
    expect(mockHandleSubmit).toHaveBeenCalledWith(id, name);
  });

});