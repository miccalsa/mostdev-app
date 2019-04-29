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
      return state.set('status', 'validating');
    case loginTypes.LOGIN_SUCCESS:
      const userDetails = {
        profilePic: action.payload.imageUrl,
        name: action.payload.name,
        email: action.payload.email,
      };
      return state
        .set('status', 'success')
        .set('isLoggedIn', true)
        .set('user', userDetails);
    case loginTypes.LOGIN_FAILED:
      return state
        .set('status', 'error')
        .set('isLoggedIn', false)
        .set('user', {});
    case loginTypes.LOGOUT_REQUEST:
      return state
       .set('status', 'pending')
        .set('isLoggedIn', false)
        .set('user', {});
    default:
      return state;
  }
}

export default loginReducer;
