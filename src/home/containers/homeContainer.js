import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeLayout from '../components/home-layout';
import * as actions from '../home-actions';
import { handleSsoLogout } from '../../public/login/login-actions';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchProjects();
  }

  onUserLogout = () => {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <HomeLayout
        projects={this.props.projects}
        profile={this.props.user}
        ssoLogout={this.onUserLogout}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.get('home').get('projects'),
    user: state.get('profile').toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    logout: bindActionCreators(handleSsoLogout, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
