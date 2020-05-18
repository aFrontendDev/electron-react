import { Action } from 'redux';
import { OPEN_MENU, CLOSE_MENU } from '../types/menu.type';

type menuState = {
  menuOpen: boolean;
};

const initialState: menuState = {
  menuOpen: false
};

const menu = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        menuOpen: true
      };
    case CLOSE_MENU:
      return {
        ...state,
        menuOpen: false
      };
    default:
      return state;
  }
};

export default menu;
