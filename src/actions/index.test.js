import * as actions from './index';

describe('Actions', () => {

  describe('addNewUser', () => {

    it('should return a type of ADD_NEW_USER and payload', () => {
      const username = 'Jared';
      const password = 'hotstuff';
      const expected = {
        type: 'ADD_NEW_USER',
        username,
        password
      };
      expect(actions.addNewUser(username, password)).toEqual(expected);
    });


  });


});