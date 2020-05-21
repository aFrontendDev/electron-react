import { Action } from 'redux';
import { OPEN_MENU, CLOSE_MENU, MenuType } from '../types/menu.type';

const initialState: MenuType = {
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
