import React from 'react';
import { Card } from './Card';
import { mockCleanMovie, mockUser } from '../../cleaners/mockData';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();
  const mockFavorites = [];

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


  it.skip('should invoke validateUser when clicking a button', () => {
    wrapper.find('button').simulate('click');
    wrapper.instance().validateUser = jest.fn();
    expect(wrapper.instance().validateUser).toHaveBeenCalled();
  });

    describe.skip('add favorite to store', () => {

      it('should addToFavorites when the movie is not in favorites', () => {
        console.log(wrapper.debug());
        wrapper.instance().addFavoritesToStore(mockCleanMovie);
      });
      
    });

});