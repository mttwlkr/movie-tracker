const userReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
  case 'LOGIN_USER':
    return [...state, { id: action.id, name: action.name }];

  default:
    return state;
  }
};

export default userReducer;