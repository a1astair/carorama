import { ActionTypes, maxNumOfMsgs } from '../config'
import { ActionConst } from 'react-native-router-flux';
import CookieManager from 'react-native-cookies';
// export const STATUS_PENDING = '_PENDING';
// export const STATUS_FULFILLED = '_FULFILLED';
// export const STATUS_REJECTED = '_REJECTED';

const INITIAL_STATE = {
  loginInfo: null,
  profileObj: null
}

const INITIAL_ROUTING_STATE = {
  scene: {},
};

export function routes(state = INITIAL_ROUTING_STATE, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };

    default:
      return state;
  }
}

export function userInfo(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_LOGIN_INFO: {
      return {
        ...state,
        loginInfo: {
          ...action.payload
        }
      };
    }
    case ActionTypes.LOGOUT: {
      // clear cookies
      CookieManager.clearAll((err, res) => {
        if (err) {
          console.log(err)
        }
      });
      return {
        ...state,
        loginInfo: null,
        profileObj: null
      };
    }
    case ActionTypes.PROFILE_OBJ: {
      return {
        ...state,
        profileObj:  {
          ...state.profileObj,
          ...action.payload
        }
      };
    }
    default:
      return state;
  }
}
