import { removeFromFavorites } from './removeFromFavorites';

describe('removeFromFavorites', () => {

  it('should remove from favorites', async () => {
    const mockUserId = 4;
    const mockMovieId = 123456;
    const mockMovieInfo = {
      user_id: 4,
      movie_id: 123456
    }

    window.fetch = jest.fn().mockImplementation(() => {
      json: () => Promise.resolve({
        mockMovieInfo
      })
    })

    const expected = [
      "/api/users/4/favorites/123456/", {
        "body": "{\"user_id\":4,\"movie_id\":123456}", 
        "headers": {"content-type": "application/json"}, 
        "method": "DELETE"}
    ]
    
    const response = removeFromFavorites(mockUserId, mockMovieId)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

});
