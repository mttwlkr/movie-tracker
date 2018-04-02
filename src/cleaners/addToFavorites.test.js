import { addToFavorites } from './addToFavorites.js'
import { mockCleanMovie } from './mockData.js'

describe('addToFavorites', () => {

  it('should add to favorites', async () => {

  window.fetch = jest.fn().mockImplementation(() => {
    json: () => Promise.resolve({
      mockCleanMovie
    })
  })

  const expected = [
  '/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(mockCleanMovie),
      headers: {
        'content-type': 'application/json'
      }
    }
  ]

  await addToFavorites(mockCleanMovie);
  expect(window.fetch).toHaveBeenCalledWith(...expected);

  });
})
