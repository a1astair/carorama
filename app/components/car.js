import React, { Component } from 'react'
import { Card, CardItem, Text, Body } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Car extends Component {
  render () {
    const {car} = this.props

    return (
      <Card>
        <CardItem>
          <Body>
            <Text onPress={() => Actions.carDetail({car: car})}>
              {`${car.title}\nCar Description:${car.description}\nCar Price: ${car.price}\nCar Color: ${car.color}`}
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}
