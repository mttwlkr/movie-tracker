export const logInUser = (id, name) => ({
  type: 'LOGIN_USER',
  id,
  name
});

export const loadMovies = (movies) => ({
  type: 'LOAD_MOVIES',
  movies
});