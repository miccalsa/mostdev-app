import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginLayout from '../components/login-layout';
import * as actions from '../login-actions';

class LoginContainer extends Component {

  handleLoginClick = () => {
    this.props.actions.authenticate();
  }

  componentDidUpdate() {
    const login = this.props.login.toJS();
    if (login.status === 'success' && login.isLoggedIn) {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <LoginLayout loginClick={this.handleLoginClick} />
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
    login: state.get('login')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
