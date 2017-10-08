import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { styles, credentials } from '../config'

export default class TokenView extends Component {

  render() {
    return (
      <View style={styles.tokenContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{this.props.username}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{this.props.email}</Text>
      </View>
    );
  }
}
