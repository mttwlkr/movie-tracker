import * as actions from '../actions';

const favoriteReducer = (state = [], action) => {

  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.movie]
  case 'REMOVE_FAVORITE':
    return state.filter(favorite => favorite.movie_id !== action.id);
  case 'ADD_ALL_FAVORITES':
    return [...action.movies];
  default:
    return state; 
  }
}

export default favoriteReducer;