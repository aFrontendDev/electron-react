import { GetState, Dispatch } from '../reducers/types';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CounterActionTypes
} from '../types/counter';

export const IncrementAction = (): CounterActionTypes => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const DecrementAction = (): CounterActionTypes => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const IncrementIfOdd = () => {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();
    const { count } = counter;

    if (count % 2 === 0) {
      return;
    }

    dispatch(IncrementAction());
  };
};

export const IncrementAsyncAction = (delay?: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(IncrementAction());
    }, delay || 1000);
  };
};
