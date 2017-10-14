import React, { Component } from 'react';
import { createCarQuery } from '../config'
import { Container,Content, Button, Text, Label, Form, Item, Input, Toast, Spinner } from 'native-base';
import { graphql } from 'react-apollo'
//Either create user or load the old menu
class CarPost extends Component {

  constructor(props) {
    super(props)
    const initState = {
      carTitle: '',
      carDescription: '',
      carPrice: '',
      carColor: ''
    }
    this.initState = initState;
    this.state = {
     ...initState
    }
    // this.createCar = this.createCar.bind(this)
  }

  render () {
    console.log(this.state);
    if (this.props.data && this.props.data.loading) {
      return (
        <Container>
          <Content>
            <Spinner color='green' />
          </Content>
        </Container>
      )
    }
    return (
        <Container>
           <Content>
             <Form>
                <Item floatingLabel>
                    <Label>Car Title</Label>
                    <Input 
                      value={this.state.carTitle} 
                      onChangeText={(e) => this.setState({carTitle: e})} />
                </Item>
                <Item floatingLabel>
                    <Label>Car Description</Label>
                    <Input
                      value={this.state.carDescription}  
                      onChangeText={(e) => this.setState({carDescription: e})} />
                </Item>
                <Item floatingLabel>
                    <Label>Car Price</Label>
                    <Input
                      value={this.state.carPrice}  
                      onChangeText={(e) => this.setState({carPrice: e})} />
                </Item>
                <Item floatingLabel>
                    <Label>Car Color</Label>
                    <Input
                      value={this.state.carColor}  
                      onChangeText={(e) => this.setState({carColor: e})} />
                </Item>
              </Form>
              <Button block success style={{marginTop: 30 }} onPress={() => this.createCar()}>
                <Text>Create Car</Text>
              </Button>
           </Content>
         </Container>
      )
  }

  createCar() {
    //also check if email is valid
    if (this.state.carTitle && this.state.carDescription && this.state.carPrice && this.state.carColor) {
      const variables = {
        title: this.state.carTitle,
        description: this.state.carDescription,
        price: this.state.carPrice,
        color: this.state.carColor,
      }
      this.props.mutate({
        variables: { ...variables }
      })
      .then(({ data }) => {
        console.log('got data', data);
        this.setState({...this.initState})
        Toast.show({
          text: 'Car Added',
          position: 'bottom',
          type: 'success',
          buttonText: 'Sweet!'})
        }).catch((error) => {
          console.log('there was an error sending the query', error);
          this.setState({...this.initState})
          Toast.show({
            text: 'Error Please try again!',
            position: 'bottom',
            type: 'danger',        
            buttonText: 'Okay'
          })
      });
    } else {
      Toast.show({
        text: 'Invalid Parameters!',
        position: 'bottom',
        type: 'danger',        
        buttonText: 'Okay'
      })
    }
  }

}

const CarPostWithData = graphql(createCarQuery)(CarPost)

export default CarPostWithData
