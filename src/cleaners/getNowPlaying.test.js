import { mockMovie, mockCleanMovie } from './mockData';  
import { getNowPlaying, cleanMovies } from './getNowPlaying.js'

describe('getNowPlaying', () => {
  it.skip('should get now playing movies', async () => {
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
     ok: true,
     json: () => Promise.resolve(mockMovie)
    }));

    const mockAPIKey = 12345678

    const expected = `https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=${mockAPIKey}&language=en-US`

    await getNowPlaying(`https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=${mockAPIKey}&language=en-US`);
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it.skip('should throw an error in case of bad response', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
     status: 500
    }));

    const expected = await getNowPlaying();
    console.log(expected)
    expect(expected).rejects.toEqual(Error('Cannot fetch'));
  });
});

describe('cleanMovies', () => {
  it('should return cleaned movies', () => {
    const expected = cleanMovies(mockMovie)
    expect(expected).toEqual(mockCleanMovie)
  })
})