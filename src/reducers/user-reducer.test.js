import userReducer from './user-reducer.js';
import * as actions from '../actions';

describe('userReducer', () => {

  it('should return the default state', () => {
    const expected = {};
    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should login user with id and name', () => {
    const id = '12345';
    const name = 'jared';
    const expected = {id, name};
    expect(userReducer(undefined, actions.logInUser(id, name))).toEqual(expected);
  });

  it('should logout user and return empty array', () => {
    expect(userReducer(undefined, actions.logOutUser())).toEqual([]);
  });

});