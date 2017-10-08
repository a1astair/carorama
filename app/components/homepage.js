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
import Jobpage from './jobPage'
import Userpage from './userPage'
import HomeContent from './homeContent'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer, Tabs, Tab } from 'native-base';
export default class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render() {
    const {logout, loginInfo, profileObj, sendProfileObj} = this.props;
    return (
       <Container>
         <Header noShadow hasTabs>
           <Left/>
           <Body>
              <Title>Bar Float</Title>
          </Body>
          <Right/>
        </Header>
          <HomeContent logout={logout} sendProfileObj={sendProfileObj} loginInfo={loginInfo} profileObj={profileObj}/>
       </Container>
    );
  }
}