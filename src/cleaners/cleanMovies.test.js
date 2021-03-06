import { cleanMovies } from './getNowPlaying.js';
import { mockMovie, mockCleanNowPlaying } from './mockData';


describe('data cleaner', () => {

  it('should return clean movie data', () => {
    expect(cleanMovies(mockMovie)).toEqual(mockCleanNowPlaying); 
  });

});