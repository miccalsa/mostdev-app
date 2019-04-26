import profileTypes from './profile-types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  picture: 'http://facedepot.s3.amazonaws.com/19060303-823-163064467-1.jpg',
  name: 'John Smith',
  role: 'Developer wannabe',
  description: 'Looking to make my way into programming as any type of developer and open to any type of assignment',
  social: [
    {
      url: 'https://linkedin.com',
      type: 'linkedin'
    },
    {
      url: 'https://github.com',
      type: 'github'
    },
    {
      url: 'https://facebook.com',
      type: 'facebook'
    }
  ]
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
