import React, { Component } from 'react'
import { connect } from 'react-redux'
import Homepage from '../components/homepage.js'
import {logout, sendProfileObj} from '../actions'

class HomepageContainer extends Component {
  render() {
    return (
      <Homepage
        logout={this.props.logout}
        sendProfileObj={this.props.sendProfileObj}
        loginInfo={this.props.loginInfo}
        profileObj={this.props.profileObj}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginInfo: state.userInfo.loginInfo,
    profileObj: state.userInfo.profileObj,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    sendProfileObj: (obj) => dispatch(sendProfileObj(obj))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageContainer);
