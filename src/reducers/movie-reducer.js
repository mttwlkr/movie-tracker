const movieReducer = (state = [], action) => {
  console.log(action)
  
  switch (action.type) {
  case 'LOAD_MOVIES':
    return [...action.movies];
  default:
    return state;
  }
};

export default movieReducer;