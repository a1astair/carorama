import React, { Component } from 'react'
import { Card, CardItem, Text, Body, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Car extends Component {
  render () {
    const {car} = this.props

    return (
      <Card>
        <CardItem onPress={() => Actions.carDetail({car: car})}>
          <Body>
            <Text key={car.id}>{`Car Description:${car.description}\nCar Price: ${car.price}\nCar Color: ${car.color}`}</Text>
          </Body>
          <Icon name='md-information-circle' size={30} />
        </CardItem>
      </Card>
    )
  }
}
