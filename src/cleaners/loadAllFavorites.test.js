import { loadAllFavorites } from './loadAllFavorites.js';
import { 
  mockUser, 
  mockLoadAllFavoritesMovie, 
  mockCleanMovie 
} from './mockData';  

describe('loadAllFavorites', () => {

  it('should fetch all favorites', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockLoadAllFavoritesMovie)
    }));

    const expected = await loadAllFavorites(mockUser.id);
    expect(expected).toEqual(mockCleanMovie);
  });

  it('should throw an error', () => {
    
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = {"status": 500};
    expect(loadAllFavorites()).rejects.toEqual(expected);
  });
});
