import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mockNowPlaying, 
  mockUser } from '../../cleaners/mockData';
import { shallow } from 'enzyme';
import { getNowPlaying } from '../../cleaners/getNowPlaying'
import { cleanMovies } from '../../cleaners/cleanMovies'

jest.mock('../../cleaners/getNowPlaying')

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App user={[]}/>, { 
      disableLifecycleMethods: true });
  });

  it('should match the snapshot without a user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display log out when user is logged in', () => {
    wrapper = shallow(<App user={mockUser}/>, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch the movies ', () => {
    const mockloadMovies = jest.fn()
    wrapper = shallow(<App 
      user={mockUser}
      loadMovies={mockloadMovies}
    />, { disableLifecycleMethods: true });
    wrapper.instance().componentDidMount()
    expect()
  })

  it.skip('should invoke showFavorites', () => {
      wrapper = shallow(<App user={mockUser}/>, { disableLifecycleMethods: true });


    //  wrapper.instance().logIn = jest.fn();
    // const spy = jest.spyOn(wrapper.instance(), 'logIn');

    // wrapper.instance().submitEmail(mockEvent);
    // expect(spy).toHaveBeenCalledWith(expected);

    // wrapper.instance().showFavorites = jest.fn();
    const spy = jest.spyOn(wrapper.instance(), 'showFavorites');
    wrapper.find('NavLink').simulate('click', spy);
    expect(spy).toHaveBeenCalled();
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

});




