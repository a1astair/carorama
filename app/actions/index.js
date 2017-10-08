import { Actions } from 'react-native-router-flux';
import { ActionTypes } from '../config'


export function sendLoginInfo(data) {
  return dispatch => {
    dispatch({type: ActionTypes.SET_LOGIN_INFO, payload: data})
  }
}

export function logout() {
  return dispatch => {
    dispatch({type: ActionTypes.LOGOUT})
  }
}

export function sendProfileObj(loginObj) {
  return dispatch => {
    dispatch({type: ActionTypes.PROFILE_OBJ, payload: loginObj})
  }
}
