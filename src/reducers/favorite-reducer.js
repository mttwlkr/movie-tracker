const favoriteReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.movie];

  case 'REMOVE_FAVORITE':
    return state.filter(favorite => favorite.movie_id !== action.id);

  case 'ADD_ALL_FAVORITES':
    return [...action.movies];

  case 'CLEAR_FAVORITES_LOGOUT':
    return [];

  default:
    return state; 
  }
}

export default favoriteReducer;