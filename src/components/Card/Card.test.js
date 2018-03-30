import React from 'react';
import { Card } from './Card';
import { mockCleanNowPlaying } from '../../cleaners/mockData';
import { shallow } from 'enzyme';

describe('Card', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card 
      movieInfo={mockCleanNowPlaying}/>);

    expect(wrapper).toMatchSnapshot();
  });

});