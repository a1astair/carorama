import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, View, Body, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class JobPage extends Component {

  logout() {
    Actions.login();
    this.props.logout();
  }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>
                {`Profile for ${this.props.profileObj.firstName} ${this.props.profileObj.lastName}`}
              </Text>
              <Text>
                {`Email: ${this.props.profileObj.email} Verified?: ${(this.props.profileObj.email_verified) ? `Yes` : `No`}`}
              </Text>
              <Text>
                {`${(this.props.profileObj.personal) ? `Personal Account` : `Company Account`}`}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Button full danger onPress={() => this.logout()}>
          <Text>Logout</Text>
        </Button>
      </Content>
    );
  }
}
