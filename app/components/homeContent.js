import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { styles, userQuery, createUserQuery } from '../config'
import TabContent from './tabContent'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer, Tabs, Tab, Text, ListItem, Radio, Label, Form, Item, Input, Toast, Spinner } from 'native-base';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
//Either create user or load the old menu
class CreateUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      isPersonal: true,
      showHomeContent: false
    }
    this.createUser = this.createUser.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    //Add to our profile Object
    if (this.props.profileObj === nextProps.profileObj && nextProps.data.User) {
      this.props.sendProfileObj(nextProps.data.User)
    }
  }
  render () {
    if (this.props.data.User === null && !this.state.showHomeContent && !this.props.data.loading) {
      return (
        <Container>
           <Content>
             <Form>
               <ListItem onPress={() => this.setState({isPersonal: true})}>
                 <Radio selected={this.state.isPersonal} />
                 <Text> Personal Account</Text>
               </ListItem>
               <ListItem onPress={() => this.setState({isPersonal: false})}>
                 <Radio selected={!this.state.isPersonal} />
                 <Text> Company Account</Text>
               </ListItem>
                <Item floatingLabel>
                    <Label>First Name</Label>
                    <Input onChangeText={(e) => this.setState({firstName: e})} />
                </Item>
                <Item floatingLabel>
                    <Label>Last Name</Label>
                    <Input onChangeText={(e) => this.setState({lastName: e})}/>
                </Item>
              </Form>
              <Button block success style={{marginTop: 30 }} onPress={this.createUser}>
                <Text>Create Account</Text>
              </Button>
           </Content>
         </Container>
      )
    }
    if (this.props.data.loading) {
      return (
        <Container>
          <Content>
            <Spinner color='green' />
          </Content>
        </Container>
      )
    }
    if (this.state.showHomeContent || this.props.data.User) {
      return (
        <TabContent logout={this.props.logout} profileObj={this.props.profileObj}/>
      )
    }
    //Just in case something goes wrong
    // return (
    //   <TabContent logout={this.props.logout} profileObj={this.props.profileObj}/>
    // )
  }

  createUser() {
    //also check if email is valid
    if (this.state.firstName && this.state.lastName) {
      const variables = {
        idToken: this.props.loginInfo.idToken,
        emailAddress: this.props.profileObj.name,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        isPersonal: this.state.isPersonal,
      }
      this.props.mutate({
        variables: { ...variables }
      })
      .then(({ data }) => {
        this.setState({showHomeContent: true})
        console.log('got data', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
    } else {
      Toast.show({
        text: 'Invalid Parameters!',
        position: 'bottom',
        buttonText: 'Okay'
      })
    }
  }

}

const CreateUserWithData = compose(
  graphql(userQuery, { options: (props) => ({
    variables: {
      auth0UserId: props.profileObj.userId
    }})
  }),
  graphql(createUserQuery))(CreateUser)

export default CreateUserWithData
