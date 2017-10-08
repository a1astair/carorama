import React, { Component } from 'react';
import Jobpage from './jobPage'
import Userpage from './userPage'
import PostPage from './postPage'
import { Tabs, Tab } from 'native-base';
export default class TabContent extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render() {
    return (
    <Tabs>
      <Tab heading="Jobs">
        <Jobpage />
      </Tab>
      <Tab heading="Posts">
        <PostPage />
      </Tab>
      <Tab heading="Profile">
        <Userpage profileObj={this.props.profileObj} logout={this.props.logout} />
      </Tab>
    </Tabs>
    );
  }
}
