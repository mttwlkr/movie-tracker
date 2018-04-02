import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mockNowPlaying, 
  mockUser } from '../../cleaners/mockData';
import { shallow } from 'enzyme';
import { getNowPlaying } from '../../cleaners/getNowPlaying'
// import { loadAllFavorites } from '../../cleaners/loadAllFavorites'
import { mapStateToProps } from './App.js'
import { mapDispatchToProps } from './App.js'

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

  it('should invoke logOutUser if there is a user and the button is clicked', () => {
    const mockLogOutUser = jest.fn()
    wrapper = shallow(<App 
      user={mockUser}
      logOutUser={mockLogOutUser}
      />, { disableLifecycleMethods: true });
    wrapper.find('.log-out').simulate('click')
    expect(mockLogOutUser).toHaveBeenCalled()
  })

  it('should fetch and load the movies into the store', async () => {
    const mockLoadMovies = jest.fn()
    const cleanMovies = jest.fn()
    wrapper = shallow(<App 
      user={mockUser}
      loadMovies={mockLoadMovies}
    />, { disableLifecycleMethods: true });
    await wrapper.instance().componentDidMount()
    await expect(mockLoadMovies).toHaveBeenCalled()
  })


  it('should map state to props', () => {
    const mockUser = {user: {name: 'matt'}}
    const mockMovies = {movies: {title: 'star wars'}}
    const mockFavorites = {favorites: {title: 'gladiator'}}

    const mappedUser = mapStateToProps(mockUser)
    expect(mappedUser.user).toEqual(mockUser.user)

    const mappedMovies = mapStateToProps(mockMovies)
    expect(mappedMovies.movies).toEqual(mockMovies.movies)

    const mappedFavorites = mapStateToProps(mockFavorites)
    expect (mockFavorites.favorites).toEqual(mockFavorites.favorites)
  })

  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn()
    const mapped = mapDispatchToProps(mockDispatch)
    mapped.loadMovies()
    mapped.logOutUser()
    // mapped.addAllFavorites()
    expect(mockDispatch).toHaveBeenCalled()
  })

  // it.skip('should invoke showFavorites', () => {
  //     wrapper = shallow(<App user={mockUser}/>, { disableLifecycleMethods: true });


    //  wrapper.instance().logIn = jest.fn();
    // const spy = jest.spyOn(wrapper.instance(), 'logIn');

    // wrapper.instance().submitEmail(mockEvent);
    // expect(spy).toHaveBeenCalledWith(expected);

    // wrapper.instance().showFavorites = jest.fn();
  //   const spy = jest.spyOn(wrapper.instance(), 'showFavorites');
  //   wrapper.find('NavLink').simulate('click', spy);
  //   expect(spy).toHaveBeenCalled();
  // });



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




