import { OPEN_MENU, CLOSE_MENU, MenuActionTypes } from '../types/menu.type';

export const OpenMenu = (): MenuActionTypes => {
  return {
    type: OPEN_MENU
  };
};

export const CloseMenu = (): MenuActionTypes => {
  return {
    type: CLOSE_MENU
  };
};
