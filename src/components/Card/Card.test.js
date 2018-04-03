import React from 'react';
import { Card } from './Card';
import { mockCleanMovie, mockUser, mockAddFavoriteMovie } from '../../cleaners/mockData';
import { shallow } from 'enzyme';
import { addToFavorites } from '../../cleaners/addToFavorites';
import { removeFromFavorites } from '../../cleaners/removeFromFavorites';
import { mapStateToProps, mapDispatchToProps } from './Card';
jest.mock('../../cleaners/addToFavorites') ;
jest.mock('../../cleaners/removeFromFavorites');

describe('Card', () => {
  let wrapper;
  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();
  let mockFavorites = [];

  beforeEach(() => {
    wrapper = shallow(<Card 
      movieInfo={mockCleanMovie}
      favorites={mockFavorites}
      addFavorite={mockAddFavorite}
      removeFavorite={mockRemoveFavorite}
      user={mockUser}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should mapStateToProps', () => {
    const mockUser = { user: {id: 4, name: 'mud'} };
    const mockFavorites = { favorites: {title: 'MUDDY'} };

    const mappedUser = mapStateToProps(mockUser);
    expect(mappedUser.name).toEqual(mockUser.name);
    const mappedFavorites = mapStateToProps(mockFavorites);
    expect(mappedFavorites.title).toEqual(mockFavorites.title);
  });

  it('should mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addFavorite();
    mapped.removeFavorite();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should not be able to favorite a movie if not logged in', () => {
    const mockUser = '';
    wrapper.instance().validateUser();
    

    expect(window.alert).toEqual(alert('Please log in or sign up to add favorites'));
  });

  it('should call addFavoritesToStore when logged in', () => {
    wrapper.instance().addFavoritesToStore = jest.fn();
    const spy = jest.spyOn(wrapper.instance(), 'addFavoritesToStore');
    wrapper.instance().validateUser();
    expect(spy).toHaveBeenCalledWith(mockAddFavoriteMovie);
  });

    describe('add favorite to store', () => {

      it('should call addFavorite when the movie is not in favorites', () => {  
        wrapper.instance().addFavoritesToStore(mockCleanMovie);
        expect(mockAddFavorite).toHaveBeenCalledWith(mockAddFavoriteMovie);
        expect(addToFavorites).toHaveBeenCalledWith(mockAddFavoriteMovie);
      });

      it('should call removeFavorite when the movie is is favorites', () => {
        mockFavorites = [mockAddFavoriteMovie];

         wrapper = shallow(<Card 
          movieInfo={mockCleanMovie}
          favorites={mockFavorites}
          addFavorite={mockAddFavorite}
          removeFavorite={mockRemoveFavorite}
          user={mockUser}/>);

         wrapper.instance().addFavoritesToStore(mockCleanMovie);
         expect(mockRemoveFavorite).toHaveBeenCalledWith(mockAddFavoriteMovie.movie_id);
         expect(removeFromFavorites).toHaveBeenCalledWith(mockUser.id, mockAddFavoriteMovie.movie_id);
      });
      
    });
});