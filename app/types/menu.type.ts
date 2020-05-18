export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export type MenuType = {
  menuOpen: boolean;
};

export type MenuOpenAction = {
  type: typeof OPEN_MENU;
};

export type MenuCloseAction = {
  type: typeof CLOSE_MENU;
};

export type MenuActionTypes = MenuOpenAction | MenuCloseAction;
