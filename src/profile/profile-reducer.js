import profileTypes from './profile-types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  role: '',
  description: '',
  social: []
});

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case profileTypes.PROFILE_REQUEST:
      return state;
    default:
      return state;
  }
}

export default profileReducer;
