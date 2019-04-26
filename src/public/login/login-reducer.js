import loginTypes from './login-types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  status: 'pending',
  isLoggedIn: false,
  user: {}
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUEST:
      return state.set('status', 'pending');
    case loginTypes.LOGIN_SUCCESS:
      return state.set('status', 'success').set('isLoggedIn', true);
    case loginTypes.LOGIN_FAILED:
      return state.set('status', 'error').set('isLoggedIn', false);
    default:
      return state;
  }
}

export default loginReducer;
