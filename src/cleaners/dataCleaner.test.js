import React from 'react';
import { cleanMovies } from './dataCleaner';
import { mockMovie, mockCleanNowPlaying } from './mockData';


describe('data cleaner', () => {

  it('should return clean movie data', () => {
    expect(cleanMovies(mockMovie)).toEqual(mockCleanNowPlaying); 
  });

});