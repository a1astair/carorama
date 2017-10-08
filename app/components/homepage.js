import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import {styles} from '../config'
import CarList from './carList'
import CarPost from './carPost'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer, Tabs, Tab } from 'native-base';
export default class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render() {
    return (
       <Container>
         <Header noShadow hasTabs/>
            <Tabs>
              <Tab heading="Car List">
                <CarList />
              </Tab>
              <Tab heading="Post Car">
                <CarPost />
              </Tab>
            </Tabs>
       </Container>
    );
  }
}