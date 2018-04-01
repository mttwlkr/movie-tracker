import React from 'react';
import { Home, mapStateToProps } from './Home';
import { mockCleanNowPlaying } from '../../cleaners/mockData';
import { shallow } from 'enzyme';


describe('Home', () => {

  it('should match the snapshot', () => {

    let wrapper = shallow(<Home 
      movies={mockCleanNowPlaying} 
      favorites={mockCleanNowPlaying} />);

    expect(wrapper).toMatchSnapshot();
  });

});