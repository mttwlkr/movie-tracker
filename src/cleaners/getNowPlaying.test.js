import { mockMovie, mockCleanMovie } from './mockData';  
import { getNowPlaying, cleanMovies } from './getNowPlaying.js'

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