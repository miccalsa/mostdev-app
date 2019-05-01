import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeLayout from '../components/home-layout';
import { fetchProjects } from '../home-actions';
import { fetchProfile } from '../../profile/profile-actions';
import { handleSsoLogout, handleUserData } from '../../public/login/login-actions';

class HomeContainer extends Component {

  componentWillMount() {
    this.props.fetchUserData();
    this.props.fetchProjects();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user.email && this.props.user.email) {
      this.props.fetchProfile(this.props.user.email);
    }
  }

  onUserLogout = () => {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <HomeLayout
        projects={this.props.projects}
        profile={this.props.profile}
        user={this.props.user}
        ssoLogout={this.onUserLogout}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.get('home').get('projects'),
    profile: state.get('profile').toJS(),
    user: state.get('login').get('user'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProjects: bindActionCreators(fetchProjects, dispatch),
    fetchProfile: bindActionCreators(fetchProfile, dispatch),
    logout: bindActionCreators(handleSsoLogout, dispatch),
    fetchUserData: bindActionCreators(handleUserData, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
