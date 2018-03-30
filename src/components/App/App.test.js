import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mockNowPlaying } from '../../cleaners/mockData';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockUser = [];

  beforeEach(() => {
    wrapper = shallow(<App user={mockUser}/>, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display log out when user is logged in', () => {
    let mockUser = [{name: 'jared'}];

    wrapper = shallow(<App user={mockUser}/>, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  // describe('componentDidMount', () => {
  //   it.skip('should invoke getNowPlaying at componentDidMount', () => {
  //     const spy = jest.spyOn();

  //   });

  //   it.skip('should call loadMovies with nowPlaying movie results', () => {
  //     const mockloadMovies = jest.fn();
  //     const mockUsers = [{user: ''}];
  //     const mockgetNowPlaying = jest.fn();

  //     wrapper = shallow(<App 
  //       user={mockUsers}
  //       loadMovies={mockloadMovies} />, {
  //         disableLifecycleMethods: true
  //       });

  //     console.log(wrapper.debug());
  //     wrapper.instance().componentDidMount();
  //     expect(mockloadMovies).toHaveBeenCalled();
  //   });

  // });


  it.skip('should ', () => {

  });

});




