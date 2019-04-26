import homeTypes from './home-types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  projects: []
});

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeTypes.PROJECT_DATA_REQUEST:
      return state;
    case homeTypes.PROJECT_DATA_SUCCESS:
      return state.set('projects', action.payload);
    case homeTypes.PROJECT_DATA_FAILED:
      return state;
    default:
      return state;
  }
}

export default homeReducer;
