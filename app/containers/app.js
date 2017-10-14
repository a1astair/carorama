import React, { Component } from 'react';
import Routes from './routes.js'
//Import store
import configureStore from '../store'
import { Root } from "native-base";
import { ApolloProvider } from 'react-apollo'
//https://github.com/graphcool-examples/react-native-apollo-instagram-example/blob/master/src/root.js
const {store, client} = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <Root>
          <Routes />
        </Root>
     </ApolloProvider>
    );
  }
}
