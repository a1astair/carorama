import React, { Component } from 'react';
import { Container, Header, Left, Title, Button, Icon, Content, Card, CardItem, Text, Body } from 'native-base';
import { View } from 'react-native'
import { styles } from '../config'
import { Actions } from 'react-native-router-flux';

export default class CarDetail extends Component {
  render() {
    const {car} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button rounded transparent onPress={() => Actions.pop()}>
                <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{car.title}</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>{car.description}</Text>
                <Text>{car.price}</Text>
                <Text>{car.color}</Text>
                <Text>{car.createdAt}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
