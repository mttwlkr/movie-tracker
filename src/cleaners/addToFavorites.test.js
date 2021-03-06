import { addToFavorites } from './addToFavorites.js';
import { mockCleanMovie } from './mockData.js';

describe('addToFavorites', () => {

  it('should add to favorites', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockCleanMovie)
    }));
    
  
    const expected = ["/api/users/favorites/new", 
      {
        method: "POST",
        body: JSON.stringify(mockCleanMovie),
        headers: {
          "content-type": "application/json"
        }
      }
    ];
  
    addToFavorites(mockCleanMovie);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should throw an error if bad response', () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(addToFavorites(mockCleanMovie)).rejects.toEqual(expected);
  });

});
