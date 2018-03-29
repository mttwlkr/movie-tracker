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