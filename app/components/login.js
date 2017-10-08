import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';
import { styles, credentials, loginUrl, callbackUrl, AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../config'
import { Actions } from 'react-native-router-flux';
import Auth0Lock from 'react-native-lock'

export default class Login extends Component {
   constructor(props) {
     super(props)
     this._lock = new Auth0Lock({ clientId: AUTH0_CLIENT_ID, domain: AUTH0_DOMAIN })
     this._showLogin = this._showLogin.bind(this)
     this._showLogin();
   }

   render() {
     return (
       <View>
       </View>
     )
   }

   _showLogin() {
     this._lock.show({}, async (err, profile, token) => { //eslint-disable-line
       if (!err && token) {
        this.props.sendLoginInfo(token);
        this.props.sendProfileObj(profile);
        Actions.homepage()
       } else {
         console.error(err)
       }
     })
   }
 }
