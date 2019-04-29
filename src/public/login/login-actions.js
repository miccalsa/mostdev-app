import loginTypes from './login-types';

const handleSsoRequest = () => dispatch => dispatch(requestLogin());

const handleSsoSuccess = (success) => dispatch => {
  const responseData = success.profileObj;
  const sessionData = Object.assign({}, responseData, { token: success.tokenId });
  sessionStorage.setItem('mostdev-user', JSON.stringify(sessionData));
  return dispatch(requestLoginSuccess(responseData));
}

const handleSsoFail = (error) => dispatch => dispatch(requestLoginFailed(error));

const handleUserData = () => dispatch => {
  const sessionData = JSON.parse(sessionStorage.getItem('mostdev-user'));
  return dispatch(requestUserData(sessionData));
}

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

const requestUserData = (data) => {
  return {
    type: loginTypes.USER_REQUEST,
    payload: data,
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
  handleUserData,
  handleSsoLogout,
};
