import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type counterStateType = {
  counter: number;
};

export type menuItemsType = {
  menuOpen: boolean;
};

export type menuStateType = {
  menu: menuItemsType;
};

export type allState = {
  counter: counterStateType;
  menu: menuStateType;
};

export type GetState = () => allState;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<allState, Action<string>>;
