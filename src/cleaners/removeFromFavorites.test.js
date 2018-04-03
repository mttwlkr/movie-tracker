import { removeFromFavorites } from './removeFromFavorites';

describe('removeFromFavorites', () => {

  // it('should remove from favorites', async () => {
  //   const mockUserId = 4;
  //   const mockMovieId = 123456;
  //   const mockMovieInfo = {
  //     user_id: 4,
  //     movie_id: 123456
  //   }

  //   window.fetch = jest.fn().mockImplementation(() => {
  //     json: () => Promise.resolve({
  //       mockMovieInfo
  //     })
  //   })

  //   const expected = [
  //     "/api/users/4/favorites/123456/", {
  //       "body": "{\"user_id\":4,\"movie_id\":123456}", 
  //       "headers": {"content-type": "application/json"}, 
  //       "method": "DELETE"}
  //   ]
    
  //   const response = removeFromFavorites(mockUserId, mockMovieId)
  //   expect(window.fetch).toHaveBeenCalledWith(...expected)
  // });

  it('should remove from favorites', async () => {
      const mockUserId = 4;
      const mockMovieId = 123456;
      const mockMovieInfo = {
        user_id: 4,
        movie_id: 123456
      };

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({ 
          status: 200,
          json: () => Promise.resolve(mockMovieInfo)
        })
      );

      const expected = [
        "/api/users/4/favorites/123456/", {
          method: "DELETE",
          body: JSON.stringify(mockMovieInfo),
          headers: {
            "content-type": "application/json"
          }
        }
      ]

      const response = await removeFromFavorites(mockUserId, mockMovieId);
  
      expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should throw an error if bad request', () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        status: 500
    }))

    const expected = {"status": 500}
      expect(removeFromFavorites()).rejects.toEqual(expected);
  });

});
