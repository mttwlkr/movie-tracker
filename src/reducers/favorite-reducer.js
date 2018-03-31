import * as actions from '../actions';

const favoriteReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.movie]
  case 'REMOVE_FAVORITE':
    return state.filter(favorite => favorite.id !== action.id);
  case 'SHOW_ALL_FAVORITES':
    return state;
  default:
    return state; 
  }
}

export default favoriteReducer;