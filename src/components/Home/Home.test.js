import React from 'react';
import { Home, mapStateToProps } from './Home';
import { mockMovieProp } from '../../cleaners/mockData';
import { shallow } from 'enzyme';


describe('Home', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Home movies={mockMovieProp} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state correctly in store', () => {
    const mockStore = { movies: mockMovieProp };
    const mapped = mapStateToProps(mockStore);
    expect(mapped.movies).toEqual(mockStore.movies);
  });

});