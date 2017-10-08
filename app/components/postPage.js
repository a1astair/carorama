import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, View, Body, Icon, Spinner, Button } from 'native-base';
import { ScrollView, RefreshControl } from 'react-native';

class PostPage extends Component {

  render() {

    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>
                PostPage
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

export default PostPage
