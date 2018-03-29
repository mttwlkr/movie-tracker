import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import movieReducer from './movie-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer
});

export default rootReducer;