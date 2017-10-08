import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, View, Body, Icon, Spinner, Button } from 'native-base';
import { ScrollView, RefreshControl } from 'react-native';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Job from './job'
import { styles, allJobsQuery } from '../config'

class JobPage extends Component {

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
              <Text>Loading Jobs</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>)
    }
    if (this.props.data.error) {
     return (
       <Content padder>
         <Card>
           {/* <Icon style={{textAlign: 'center'}} name='refresh' onPress={() => this.props.data.refetch()}/> */}
           <CardItem>
             <Body>
               <ScrollView style={styles.container} refreshControl={
                 // This enables the pull-to-refresh functionality
                 <RefreshControl
                   refreshing={this.props.data.networkStatus === 4}
                   onRefresh={this.props.data.refetch}
                 />
               }>
               <Text>Error Getting Jobs, Please try again!</Text>
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
          {/* <Icon style={{textAlign: 'center'}} name='refresh' onPress={() => this.props.data.refetch()}/> */}
          {this.props.data.allJobs.map((job) =>
            <Job key={job.id} job={job}/>
          )}
        </Content>
      </ScrollView>
    )
  }
}

const JobPageWithData = graphql(allJobsQuery)(JobPage)

export default JobPageWithData
