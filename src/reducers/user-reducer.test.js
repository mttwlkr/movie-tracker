import userReducer from './user-reducer.js';
import * as actions from '../actions';

describe('userReducer', () => {

  it('should return the default state', () => {
    const expected = [];
    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should add a new user into state', () => {
    const username = 'jared';
    const password = 'hotstuff';
    const expected = [{username, password}];
    expect(userReducer(undefined, actions
      .addNewUser(username, password))).toEqual(expected);
  });

});