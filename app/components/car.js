import React, { Component } from 'react'
import { Card, CardItem, Text, Body } from 'native-base'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default class Car extends Component {
  render () {
    const {car} = this.props

    return (
      <Card>
        <CardItem>
          <Body>
            <Text 
              key={car.id}>{`${car.title}\nCar Description:${car.description}\nCar Price: ${car.price}\nCar Color: ${car.color}`}</Text>
          </Body>
          <Icon name='info' size={30} onPress={() => Actions.carDetail({car: car})} />
        </CardItem>
      </Card>
    )
  }
}
