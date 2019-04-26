import loginTypes from './login-types';

const authenticate = () => {
  return (dispatch) => {
    dispatch(requestLogin())
    setTimeout(() => dispatch(requestLoginSuccess()), 5000);
  }
}

const requestLogin = () => {
  return {
    type: loginTypes.LOGIN_REQUEST,
  }
}

const requestLoginSuccess = () => {
  return {
    type: loginTypes.LOGIN_SUCCESS,
  }
}

const requestLoginFailed = () => {
  return {
    type: loginTypes.LOGIN_FAILED,
  }
}

export {
  authenticate
};
