import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mockNowPlaying, 
  mockUser } from '../../cleaners/mockData';
import { shallow } from 'enzyme';
import { getNowPlaying } from '../../cleaners/getNowPlaying'
import { mapStateToProps } from './App.js'
import { mapDispatchToProps } from './App.js'

jest.mock('../../cleaners/getNowPlaying')

describe('App', () => {
  let wrapper
  let mockLogOutUser = jest.fn()
  let mockLocation = { pathname: "/" };
  let mockClearFavoritesLogOut = jest.fn();
  let mockLoadMovies = jest.fn()

  beforeEach(() => {

    wrapper = shallow(<App 
      user={mockUser}
      loadMovies={mockLoadMovies}
      logOutUser={mockLogOutUser}
      location={mockLocation}
      clearFavoritesLogOut={mockClearFavoritesLogOut}
    />, { disableLifecycleMethods: true });

  });

  it('should match the snapshot without a user', () => {
    wrapper = shallow(<App 
      user={[]}/>, { 
      disableLifecycleMethods: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should display log out when user is logged in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke logOutUser and clearFavoritesLogOut when handleLogOut is called', () => {
    wrapper.instance().handleLogOut();
    expect(mockLogOutUser).toHaveBeenCalled();
    expect(mockClearFavoritesLogOut).toHaveBeenCalled();
  });

  it('should fetch and load the movies into the store', async () => {
    await wrapper.instance().componentDidMount();
    await expect(getNowPlaying).toHaveBeenCalled();
    await expect(mockLoadMovies).toHaveBeenCalled();
  });


  it('should map state to props', () => {
    const mockUser = {user: {name: 'matt'}};
    const mockMovies = {movies: {title: 'star wars'}};
    const mockFavorites = {favorites: {title: 'gladiator'}};

    const mappedUser = mapStateToProps(mockUser);
    expect(mappedUser.user).toEqual(mockUser.user);

    const mappedMovies = mapStateToProps(mockMovies);
    expect(mappedMovies.movies).toEqual(mockMovies.movies);

    const mappedFavorites = mapStateToProps(mockFavorites);
    expect (mockFavorites.favorites).toEqual(mockFavorites.favorites);
  });

  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.loadMovies();
    mapped.logOutUser();
    mapped.clearFavoritesLogOut();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should render showHome when pathname is favorite', () => {
    mockLocation={pathname: '/favorites'};

    wrapper = shallow(<App 
      user={mockUser}
      loadMovies={mockLoadMovies}
      logOutUser={mockLogOutUser}
      location={mockLocation}
      clearFavoritesLogOut={mockClearFavoritesLogOut}
    />, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

});




