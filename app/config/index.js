//All of our config goes in this file
import {StyleSheet} from 'react-native'

export { createCarQuery, allCarsQuery } from './graphQl'

export const graphCoolUri = `https://api.graph.cool/simple/v1/cj8gfv26g09mr01883fj5abi2`

export const ActionTypes = {
  SET_LOGIN_INFO: "SET_LOGIN_INFO",
  LOGOUT: "LOGOUT",
  PROFILE_OBJ: "PROFILE_OBJ"
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
});
