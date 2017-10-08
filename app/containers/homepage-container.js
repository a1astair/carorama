import React, { Component } from 'react'
import { connect } from 'react-redux'
import Homepage from '../components/homepage.js'
import {logout, sendProfileObj} from '../actions'

class HomepageContainer extends Component {
  render() {
    return (
      <Homepage
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageContainer);
