import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import movieReducer from './movie-reducer';
import favoriteReducer from './favorite-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
  favorites: favoriteReducer
});

export default rootReducer;