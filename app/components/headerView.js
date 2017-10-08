import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { styles, credentials } from '../config'

export default class HeaderView extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
      </View>
    );
  }
}
