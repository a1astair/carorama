import React, { Component } from 'react';
import LoginContainer from './login-container.js';
import HomepageContainer from './homepage-container.js';
import JobDetail from '../components/jobDetail.js';
import {Actions, Scene, Router, Reducer, ActionConst} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';


//Map the flux router for redux https://github.com/aksonov/react-native-router-flux/blob/master/docs/REDUX_FLUX.md
const RouterWithRedux = connect()(Router);

//Fix key xxx allready defined  https://github.com/aksonov/react-native-router-flux/blob/master/docs/REDUX_FLUX.md#about-key-xxx-is-already-defined

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" title="Login Page" component={LoginContainer} hideNavBar={true} panHandlers={null}/>
    <Scene key="homepage" title="Bar Float" component={HomepageContainer} hideNavBar={true} panHandlers={null} type={ActionConst.RESET}/>
    <Scene key="jobDetail" title="JobDetail" component={JobDetail} hideNavBar={true}/>
  </Scene>
);

const myConnectedRouter = connect()(Router);

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
