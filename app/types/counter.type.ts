export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export type CounterType = {
  count: number;
};

export type IncrementAction = {
  type: typeof INCREMENT_COUNTER;
};

export type DecrementAction = {
  type: typeof DECREMENT_COUNTER;
};

export type CounterActionTypes = IncrementAction | DecrementAction;
