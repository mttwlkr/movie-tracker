import React from 'react';
import SignUp from './SignUp';
import { shallow } from 'enzyme';

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUp />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set authenticated state if response is ok', async () => {
    const mockData = { name: 'Matt', password: 'sploosh', email: 'ohmama@zguy.com' }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
     ok: true,
     json: () => Promise.resolve(mockData)
    }));

    await wrapper.instance().handleFetch(mockData);
    expect(wrapper.state('authenticated')).toEqual(true);
  });

  it('should check if signUpError is true', async () => {
     const mockData = { name: 'Matt', password: 'sploosh', email: 'ohmama@zguy.com', error: true }

     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
     ok: true,
     json: () => Promise.resolve(mockData)
    }));

    await wrapper.instance().handleFetch(mockData);
    expect(wrapper.state('signUpError')).toEqual(true);
  });

  it('should alert an error if response is bad', async () => {
    const mockData = { name: 'Matt', password: 'sploosh', email: 'ohmama@zguy.com', error: true }

     window.alert = jest.fn()
     window.fetch = jest.fn().mockImplementation(() => Promise.reject({
     status: 500,
    }));

     await wrapper.instance().handleFetch(mockData);
     expect(window.alert).toHaveBeenCalled();
  });

  it('should update the state of name, email and password when input changes', () => {
   const mailEvent = { 
    target: { 
      value: 'terminator@dude.com', 
      name: 'email' 
      } 
    };

   const nameEvent = { 
    target: { 
      value: 'Arnie', 
      name: 'name' 
    } 
  };

   const passwordEvent = { 
    target: { 
      value: 'doomsday', 
      name: 'password' 
    } 
  };
   
   wrapper.find('#name').simulate('change', nameEvent);
   expect(wrapper.state('name')).toEqual('Arnie');

   wrapper.find('#email').simulate('change', mailEvent);
   expect(wrapper.state('email')).toEqual('terminator@dude.com');

   wrapper.find('#password').simulate('change', passwordEvent);
   expect(wrapper.state('password')).toEqual('doomsday');

  });  

  it('should invoke handleFetch when handleSubmit is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const mockInfo = {
      name: 'Bob',
      email: 'bobbafetch@dude.com',
      password: 'boobbafette'
    };

    wrapper.instance().handleFetch = jest.fn()
    const spy = jest.spyOn(wrapper.instance(), 'handleFetch');

    wrapper.setState({
      name: 'Bob',
      email: 'bobbafetch@dude.com',
      password: 'boobbafette'
    });

    wrapper.instance().handleSubmit(mockEvent);
    expect(spy).toHaveBeenCalledWith(mockInfo);
  });


  it('should reset state to empty when handleSubmit is called', async () => {
    const mockData = { name: 'Matt', password: 'sploosh', email: 'ohmama@zguy.com' }

    const mockEvent = { preventDefault: jest.fn() };
    wrapper.setState({
      name: 'Matt', 
      password: 'sploosh', 
      email: 'ohmama@zguy.com'
    });

    const expected = {
      name: '',
      email: '',
      password: '',
      authenticated: false,
      signUpError: false
    };
    wrapper.instance().handleFetch = jest.fn()
    await wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });


})