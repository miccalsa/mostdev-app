import profileTypes from './profile-types';
import API from '../config/api';

const fetchProfile = (email) => {
  return (dispatch) => {

    dispatch(requestProfileData());
    API
      .get(`/api/profiles/${email}`)
      .then(response => dispatch(requestProfileDataSuccess(response.data)))
      .catch(error => dispatch(requestProfileDataFailed(error)))
  }
}

const requestProfileData = () => {
  return {
    type: profileTypes.PROFILE_REQUEST,
  }
}

const requestProfileDataSuccess = (projects) => {
  return {
    type: profileTypes.PROFILE_SUCCESS,
    payload: projects,
  }
}

const requestProfileDataFailed = (error) => {
  return {
    type: profileTypes.PROFILE_FAILED,
    payload: error,
  }
}

export {
  fetchProfile
}
