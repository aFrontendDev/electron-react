import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type counterStateType = {
  counter: number;
};

export type menuStateType = {
  menu: {
    menuOpen: boolean;
  };
};

export type GetState = () => {
  return(counterStateType, menuStateType);
};

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<counterStateType, menuStateType, Action<string>>;
