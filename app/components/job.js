import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Text, View, Body, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Job extends Component {
  render() {
    const {job} = this.props;
    
    return (
        <Card>
          <CardItem onPress={() => Actions.jobDetail({job: job})}>
            <Body>
              <Text key={job.id}>{`Job Description:${job.description}\nJob Location: ${job.city}\nJob Company: ${job.company}`}</Text>
            </Body>
            <Icon name='md-information-circle' size={30} />
          </CardItem>
        </Card>
    );
  }
}
