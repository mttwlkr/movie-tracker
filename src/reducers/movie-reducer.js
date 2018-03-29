const movieReducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_MOVIES':
    return [...state, ...action.movies];
  default:
    return state;
  }
};

export default movieReducer;