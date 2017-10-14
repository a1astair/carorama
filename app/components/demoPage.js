import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../config'

export default class Car extends Component {
  render () {

    return (
    //   <View style={{
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //     <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //     <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    //   </View>
        <View style={styles.container}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigblue}>just bigblue</Text>
            <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
            <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        </View>
    )
  }
}
