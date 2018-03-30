import * as actions from './index';

describe('Actions', () => {

  describe('logInUser', () => {
    it('should return a type of LOGIN_USER and payload', () => {
      const id = '86749';
      const name = 'hotstuff';
      const expected = {
        type: 'LOGIN_USER',
        id,
        name
      };
      expect(actions.logInUser(id, name)).toEqual(expected);
    });
  });

   describe('logOutUser', () => {
    it('should return a type of LOGOUT_USER', () => {
      const expected = {
        type: 'LOGOUT_USER'
      };
      expect(actions.logOutUser()).toEqual(expected);
    });
  });

   describe('loadMovies', () => {
    it('should return a type of LOAD_MOVIES', () => {
      const movies = [{name: 'hotfire'}, {name: 'coldwaterbackmountain'}]
      const expected = {
        type: 'LOAD_MOVIES',
        movies
      };
      expect(actions.loadMovies(movies)).toEqual(expected);
    });
  });

});