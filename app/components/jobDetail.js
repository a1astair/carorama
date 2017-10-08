import React, { Component } from 'react';
import { Container, Header, Left, Title, Button, Icon, Content, Card, CardItem, Text, View, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class JobDetail extends Component {
  render() {
    const {job} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button rounded transparent onPress={() => Actions.pop()}>
                <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{job.description}</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>{job.city}</Text>
                <Text>{job.company}</Text>
                <Text>{job.description}</Text>
                <Text>{job.createdAt}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
