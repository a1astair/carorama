import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/login.js'
import {sendLoginInfo, sendProfileObj} from '../actions'

class LoginContainer extends Component {
  render() {
    return (
      <Login
        // loginInfo={this.props.loginInfo}
        // loginObj={this.props.loginObj}
        sendLoginInfo={this.props.sendLoginInfo}
        sendProfileObj={this.props.sendProfileObj}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // loginInfo: state.userInfo.loginInfo,
    // loginObj: state.userInfo.loginObj
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendLoginInfo: (obj) => dispatch(sendLoginInfo(obj)),
    sendProfileObj: (obj) => dispatch(sendProfileObj(obj)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
