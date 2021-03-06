import React, { Component } from 'react';
import HomepageContainer from './homepage-container.js';
import carDetail from '../components/carDetail.js';
import demoPage from '../components/demoPage.js';
import {Actions, Scene, Router, Reducer} from 'react-native-router-flux';
import { connect} from 'react-redux';

//Fix key xxx allready defined  https://github.com/aksonov/react-native-router-flux/blob/master/docs/REDUX_FLUX.md#about-key-xxx-is-already-defined

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="homepage" title="Car-orama" component={HomepageContainer} initial/>
    <Scene key="carDetail" title="Car Details" component={carDetail} hideNavBar={true}/>
    <Scene key="demoPage" title="Demo Page" component={demoPage} hideNavBar={true}/>
  </Scene>
);

class Routes extends Component {
  reducerCreate(params) {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      this.props.dispatch(action)
      return defaultReducer(state, action);
    };
  }

  render () {
    return (
      <Router
        createReducer={this.reducerCreate.bind(this)}
        scenes={scenes} />
    );
  }
}

export default connect()(Routes);
