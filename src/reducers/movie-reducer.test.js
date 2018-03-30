import movieReducer from './movie-reducer';
import * as action from '../actions';

describe('movieReducer', () => {

  it('should return default state', () => {
    expect(movieReducer(undefined, {})).toEqual([]);
  });

  it('should load movies', () => {
    const movies = [{name: 'too fat too furious'}, {name: 'fast five'}];

    expect(movieReducer(undefined, action.loadMovies(movies))).toEqual(movies);
  });

});