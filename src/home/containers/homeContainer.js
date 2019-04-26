import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeLayout from '../components/home-layout';
import * as actions from '../home-actions';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchProjects();
  }

  render() {
    return (
      <HomeLayout projects={this.props.projects} />
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.get('home').get('projects'),
    user: state.get('login').get('user'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
