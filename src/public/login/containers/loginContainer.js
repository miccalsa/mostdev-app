import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginLayout from '../components/login-layout';
import * as actions from '../login-actions';

class LoginContainer extends Component {

  componentDidUpdate() {
    const { login, history } = this.props;

    if (login.status === 'success' && login.isLoggedIn) {
      history.push('/home');
    }
  }

  render() {
    if (sessionStorage.getItem('mostdev-user')) {
      this.props.history.push('/home');
    }

    return (
      <LoginLayout
        loginData={this.props.login}
        ssoRequest={this.props.actions.handleSsoRequest}
        ssoSuccess={this.props.actions.handleSsoSuccess}
        ssoFail={this.props.actions.handleSsoFail}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    login: state.get('login').toJS()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
