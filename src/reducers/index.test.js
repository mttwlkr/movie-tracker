import rootReducer from './index';

describe('root reducer', () => {

  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  });

});