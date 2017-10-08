import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import {routes, userInfo} from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';
//http://dev.apollodata.com/react/redux.html
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { graphCoolUri } from '../config'

const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: graphCoolUri})
  })

export default function configureStore(initialState) {
  let store

  /*eslint-disable*/
  if (process.env.NODE_ENV === 'production') {
  /*eslint-enable*/
    store = createStore(
      combineReducers({
         routes,
         userInfo,
         apollo: client.reducer(),
       }),
      initialState,
      applyMiddleware(promiseMiddleware(), thunk, client.middleware())
    );
  } else {
    store = createStore(
      combineReducers({
         routes,
         userInfo,
         apollo: client.reducer(),
       }),
      initialState,
      composeWithDevTools(
        applyMiddleware(promiseMiddleware(), thunk, client.middleware())
      ));
    /* eslint-disable */
    if (module.hot) {
      module.hot.accept(() => {
        store.replaceReducer(require('../reducers').default);
      });
      /* eslint-enable */
    }
  }
  return {store, client};
}
