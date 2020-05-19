import counterReducer from '../../app/reducers/counter';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../../app/types/counter.type';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(counterReducer(undefined, {})).toMatchSnapshot();
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(counterReducer(1, { type: INCREMENT_COUNTER })).toMatchSnapshot();
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(counterReducer(1, { type: DECREMENT_COUNTER })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(counterReducer(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
