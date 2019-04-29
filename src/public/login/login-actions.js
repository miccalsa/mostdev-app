import loginTypes from './login-types';

const handleSsoRequest = () => dispatch => dispatch(requestLogin());

const handleSsoSuccess = (success) => dispatch => {
  const responseData = success.profileObj;
  sessionStorage.setItem('mostdev-user', success.tokenId);
  return dispatch(requestLoginSuccess(responseData));
}

const handleSsoFail = (error) => dispatch => dispatch(requestLoginFailed(error));

const handleSsoLogout = () => dispatch => {
  sessionStorage.removeItem('mostdev-user');
  return dispatch(requestLogout());
}

const requestLogin = () => {
  return {
    type: loginTypes.LOGIN_REQUEST,
  }
}

const requestLoginSuccess = (loginResponse) => {
  return {
    type: loginTypes.LOGIN_SUCCESS,
    payload: loginResponse
  }
}

const requestLoginFailed = (errorResponse) => {
  return {
    type: loginTypes.LOGIN_FAILED,
    payload: errorResponse
  }
}

const requestLogout = () => {
  return {
    type: loginTypes.LOGOUT_REQUEST,
  }
}

export {
  handleSsoRequest,
  handleSsoSuccess,
  handleSsoFail,
  handleSsoLogout,
};
