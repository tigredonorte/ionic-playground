import { reducer } from './user-data.reducer';
import { initialState } from '../user-data.state';

describe('UserData Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
