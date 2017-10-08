//All of our config goes in this file
import {StyleSheet} from 'react-native'

export const loginUrl = `https://barfloat.auth0.com/login?client=bMrWGSsV5TSvGXE58G4IapiHfIc6YkkP`

export const callbackUrl = `https://barfloat.auth0.com/authorize?client_id=bMrWGSsV5TSvGXE58G4IapiHfIc6YkkP`

export const AUTH0_CLIENT_ID = "bMrWGSsV5TSvGXE58G4IapiHfIc6YkkP"
export const AUTH0_DOMAIN = "barfloat.auth0.com"

export { userQuery, createUserQuery, allJobsQuery } from './graphQl'

export const graphCoolUri = `https://api.graph.cool/simple/v1/cj14j7pupbzu10152qaci7i6l`

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
  token: {
    flex: 1,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  actionButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16214D',
    borderRadius: 5,
    margin: 8,
  },
  actionButtonText: {
    color: '#ffffff',
  },
  message: {
    fontFamily: 'HelveticaNeue-Thin',
    fontSize: 14,
    alignSelf: 'center',
  },

  // Token View
  tokenContainer: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#D0D2D3',
    margin: 8,
    padding: 10,
  },
  label: {
    fontFamily: 'HelveticaNeue-Medium',
    marginTop: 10,
  },
  value: {
    fontFamily: 'HelveticaNeue-Light',
    alignSelf: 'center',
  },

  // Header View
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
  },
  logo: {
    height: 200,
    width: 400
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },

});
