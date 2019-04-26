import { combineReducers } from 'redux-immutable';

import login from '../public/login/login-reducer';
import home from '../home/home-reducer';

const rootReducer = combineReducers({
  login,
  home,
});

export default rootReducer;
