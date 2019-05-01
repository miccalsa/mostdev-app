import homeTypes from './home-types';
import API from '../config/api';

const fetchProjects = () => {
  return (dispatch) => {

    dispatch(requestProjectData());
    API
      .get('/api/projects')
      .then(response => dispatch(requestProjectDataSuccess(response.data)))
      .catch(error => dispatch(requestProjectDataFailed(error)))
  }
}

const requestProjectData = () => {
  return {
    type: homeTypes.PROJECT_DATA_REQUEST
  }
}

const requestProjectDataSuccess = (projects) => {
  return {
    type: homeTypes.PROJECT_DATA_SUCCESS,
    payload: projects
  }
}

const requestProjectDataFailed = (error) => {
  console.log(error);
  return {
    type: homeTypes.PROJECT_DATA_FAILED,
  }
}

export {
  fetchProjects
}
