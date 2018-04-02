import { mockMovie, mockCleanMovie } from './mockData';  
import { getNowPlaying, cleanMovies } from './getNowPlaying.js'

describe('getNowPlaying', () => {
  it('should get now playing movies', async () => {
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
     ok: true,
     json: () => Promise.resolve(mockMovie)
    }));

    const answer = await getNowPlaying()
    const expected = cleanMovies(mockMovie)
    expect(answer).toEqual(expected)
  });

  it('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
     status: 500
    }));

    const expected = {"status": 500}
    expect(getNowPlaying()).rejects.toEqual(expected);
  });
});

describe('cleanMovies', () => {
  it('should return cleaned movies', () => {
    const expected = cleanMovies(mockMovie)
    expect(expected).toEqual(mockCleanMovie)
  })
})