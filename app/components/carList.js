import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, View, Body, Icon, Spinner, Button } from 'native-base';
import { ScrollView, RefreshControl } from 'react-native';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Car from './car'
import { styles, allCarsQuery } from '../config'

class CarPage extends Component {

  getData = () => {
    this.props.data.refetch()
  }

  render() {
    if (this.props.data.loading) {
      return (<Content padder>
        <Card>
          <Spinner />
          <CardItem>
            <Body>
              <Text>Loading Cars</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>)
    }
    if (this.props.data.error) {
     return (
       <Content padder>
         <Card>
           <CardItem>
             <Body>
               <ScrollView style={styles.container} refreshControl={
                 // This enables the pull-to-refresh functionality
                 <RefreshControl
                   refreshing={this.props.data.networkStatus === 4}
                   onRefresh={this.props.data.refetch}
                 />
               }>
               <Text>Error Getting Cars, Please try again!</Text>
               </ScrollView>
             </Body>
           </CardItem>
         </Card>
       </Content>
     )
   }
    return (
      <ScrollView style={styles.container} refreshControl={
          // This enables the pull-to-refresh functionality
          <RefreshControl
            refreshing={this.props.data.networkStatus === 4}
            onRefresh={this.props.data.refetch}

          />
      }>
        <Content padder>
          {(this.props.data.allCars) && this.props.data.allCars.map((car) => 
            <Car key={car.id} car={car}/>
          )}
        </Content>
      </ScrollView>
    )
  }
}

const CarPageWithData = graphql(allCarsQuery)(CarPage)

export default CarPageWithData