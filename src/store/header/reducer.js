import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const INITIAL_STATE = Immutable({
  isMenuOpen: false,
  isPinned: false,
  isFixed: false,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.MENU_CLICK: {
      return state.merge({ isMenuOpen: !state.isMenuOpen });
    }
    case types.HEADER_FIXED: {
      return state.merge({ isFixed: !state.isFixed });
    }
    case types.HEADER_PINNED: {
      return state.merge({ isPinned: !state.isPinned });
    }
    case types.HEADER_UPDATE_STATE: {
      const { isPinned, isFixed } = action;
      return state.merge({ isPinned, isFixed });
    }
    default:
      return state;
  }
}
