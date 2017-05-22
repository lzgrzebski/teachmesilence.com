import ga from '../../services/ga';
import * as headerTypes from '../header/actionTypes';
import * as postTypes from '../posts/actionTypes';
import * as userTypes from '../user/actionTypes';

export default () => next => (action) => {
  switch (action.type) {
    // consider change this to smth like react-tap (action have additional props)
    case userTypes.TOP_INSTAGRAM_CLICK:
    case userTypes.NOTIFYBOX_INSTAGRAM_CLICK:
    case userTypes.NOTIFYBOX_NOTIFY_CLICK:
    case userTypes.LINKEDIN_BOTTOM_CLICK:
    case userTypes.INSTAGRAM_BOTTOM_CLICK:
    case userTypes.GITHUB_BOTTOM_CLICK:
    case userTypes.ADD_VISITED_POST:
    case postTypes.SET_CURRENT_POST:
    case postTypes.SET_ACTIVE_POST:
    case postTypes.SHARE_CLICK:
    case headerTypes.MENU_CLICK: {
      if (window) {
        const actionType = action.type.split(':');
        ga()(
          'send',
          'event',
          actionType[0],
          actionType[1],
          action.slug ? action.slug : JSON.stringify(action),
        );
      }
      return next(action);
    }
    default:
      return next(action);
  }
};
