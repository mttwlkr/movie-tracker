export const logInUser = (id, name) => ({
  type: 'LOGIN_USER',
  id,
  name
});

export const logOutUser = () => ({
  type: 'LOGOUT_USER'
});

export const loadMovies = (movies) => ({
  type: 'LOAD_MOVIES',
  movies
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  movie
});

export const removeFavorite = (id) => ({
  type: 'REMOVE_FAVORITE',
  id
});

export const addAllFavorites = (movies) => ({
  type: 'ADD_ALL_FAVORITES',
  movies
});
