import React, { Component } from 'react';
import Routes from './routes.js'
import { Provider } from 'react-redux';
//Import store
import configureStore from '../store'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import {graphCoolUri} from '../config'
//https://github.com/graphcool-examples/react-native-apollo-instagram-example/blob/master/src/root.js
const {store, client} = configureStore();


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ApolloProvider store={store} client={client}>
       <Routes />
     </ApolloProvider>
    );
  }
}
