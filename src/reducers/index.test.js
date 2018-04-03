import rootReducer from './index';
import

describe('root reducer', () => {

  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  });

});