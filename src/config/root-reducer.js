import { combineReducers } from 'redux-immutable';

import login from '../public/login/login-reducer';
import home from '../home/home-reducer';
import profile from '../profile/profile-reducer';

const rootReducer = combineReducers({
  login,
  home,
  profile,
});

export default rootReducer;
