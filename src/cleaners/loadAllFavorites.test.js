import { loadAllFavorites } from './loadAllFavorites.js'
import { mockUser, mockLoadAllFavoritesMovie, mockCleanMovie } from './mockData';  

describe('loadAllFavorites', () => {

  it('should fetch all favorites', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockLoadAllFavoritesMovie)
    }));

    const expected = await loadAllFavorites(mockUser.id);
    expect(expected).toEqual(mockCleanMovie)
  });
});