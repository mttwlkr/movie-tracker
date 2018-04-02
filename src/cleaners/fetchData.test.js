import { getNowPlaying, 
  addToFavorites,
  removeFromFavorites,
  loadAllFavorites } from './fetchData';
// import { cleanMovies } from './dataCleaner';
import { mockMovie, 
  mockCleanMovie, mockUser } from './mockData';

describe.skip('fetch data', () => {

  describe('getNowPlaying', () => {
    it('should get now playing movies', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
       ok: true,
       json: () => Promise.resolve(mockMovie)
      }));

      const expected  = await cleanMovies(mockMovie);
      expect(expected).toEqual(mockCleanMovie)
    });

    it.skip('should throw an error in case of bad response', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
       status: 500
      }));

      const expected = await getNowPlaying();
      expect(expected).rejects.toEqual(Error(''));
    });
  });

  describe('addToFavorites', () => {

    it.skip('should add to favorites', async () => {

    //     const expected = [
    //   '/api/v1/groceries',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({ grocery: mockGrocery }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // ]

    // wrapper.setState({ grocery: mockGrocery })
    // wrapper.instance().handleAddGrocery(mockEvent)
    // expect(window.fetch).toHaveBeenCalledWith(...expected)

      const mockResponse = {
        id: 91,
        message: "Movie was added to favorites",
        status: "success"
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        method: 'POST',
        body: JSON.stringify(mockCleanMovie),
        headers: {
          'Content-Type': 'application/json'
        }
      }));

      const expected = await addToFavorites(mockCleanMovie);
      expect(expected).toEqual(mockResponse);
    });

  });


    describe.skip('removeFromFavorites', () => {
      it('should remove from favorites', async () => {
       
      });

    });
});

