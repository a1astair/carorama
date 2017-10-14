import React, { Component } from 'react';
import { Content, Card, CardItem, Text, Body, Spinner} from 'native-base';
import { ScrollView, RefreshControl } from 'react-native';
import { graphql } from 'react-apollo'
import Car from './car'
import { styles, allCarsQuery } from '../config'

class CarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedCars: null
    }
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
           
          {(this.props.data.allCars) && [...this.props.data.allCars]
            .sort(((a, b) => a.title.localeCompare(b.title)))
            .map((car) => 
              <Car key={car.id} car={car}/>
            )}
        </Content>
      </ScrollView>
    )
  }
}

const CarPageWithData = graphql(allCarsQuery)(CarPage)

export default CarPageWithData
