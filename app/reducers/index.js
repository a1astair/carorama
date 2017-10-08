import { ActionTypes, maxNumOfMsgs } from '../config'
import { ActionConst } from 'react-native-router-flux';
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
    default:
      return state;
  }
}
