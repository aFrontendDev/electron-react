import { Action } from 'redux';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CounterType
} from '../types/counter.type';

const initialState: CounterType = {
  count: 0
};
export default function counterReducer(
  state = initialState,
  action: Action<string>
) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      const { count } = state;
      const newCounterVal = count + 1;
      return {
        ...state,
        count: newCounterVal
      };
    }
    case DECREMENT_COUNTER: {
      const { count } = state;
      const newCounterVal = count - 1;
      return {
        ...state,
        count: newCounterVal
      };
    }
    default:
      return state;
  }
}
