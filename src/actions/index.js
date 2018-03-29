export const addNewUser = (username, password) => ({
  type: 'ADD_NEW_USER',
  username,
  password
});

export const loadMovies = (movies) => ({
  type: 'LOAD_MOVIES',
  movies
});