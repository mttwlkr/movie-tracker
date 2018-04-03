import favoriteReducer from './favorite-reducer';
import * as action from '../actions';

describe('favoriteReducer', () => {

  it('should return default state', () => {
  expect(favoriteReducer(undefined, {})).toEqual([]);
  });

  it('should add favorite', () => {
    const movie = {name: 'too fat too furious'};
    const expected = [{name: 'too fat too furious'}];

    expect(favoriteReducer(undefined, action.addFavorite(movie))).toEqual(expected);
  });

  it('should remove favorite', () => {
    const stateArray = [{ 
      name: 'too fat five', 
      movie_id: 543
    }, 
    { name: 'too slow', 
      movie_id: 999
    }];

    const movie = {name: 'too fat five', movie_id: 543};

    const expected = [{name: 'too slow', movie_id: 999}];

    expect(favoriteReducer(stateArray, action.removeFavorite(movie.movie_id))).toEqual(expected);
  });

  it('should add all to favorites' , () => {
    const allFavorites = [{ 
      name: 'too fat five', 
      movie_id: 543
    }, 
    { name: 'too slow', 
      movie_id: 999
    }];

    expect(favoriteReducer(undefined, action.addAllFavorites(allFavorites))).toEqual(allFavorites);
  });

  it('should clear favorites when user logs out', () => {
    expect(favoriteReducer(undefined, action.clearFavoritesLogOut())).toEqual([]);
  });

});