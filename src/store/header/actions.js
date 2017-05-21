import * as types from './actionTypes';

export const menuClick = isMenuOpen => ({
  type: types.MENU_CLICK,
  isMenuOpen,
});

export const headerFixed = () => ({
  type: types.HEADER_FIXED,
});

export const headerPinned = () => ({
  type: types.HEADER_PINNED,
});

export const headerUpdateState = ({ isPinned, isFixed }) => ({
  type: types.HEADER_UPDATE_STATE,
  isPinned,
  isFixed,
});

export const notifyStatus = notifyBtn => ({
  type: types.NOTIFY_BTN,
  notifyBtn,
});

