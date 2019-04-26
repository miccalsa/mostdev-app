import homeTypes from './home-types';

const fetchProjects = () => {
  return (dispatch) => {
    const data = [
      {
        id: 0,
        name: 'Ethical Hacker',
        description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
        codeLink: '',
        wikiLink: '',
        demoLink: '',
      },
      {
        id: 1,
        name: 'CV Matcher',
        description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
        codeLink: '',
        wikiLink: '',
        demoLink: '',
      },
      {
        id: 2,
        name: 'Assignment Scrapper',
        description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
        codeLink: '',
        wikiLink: '',
        demoLink: '',
      },
    ];
    dispatch(requestProjectData())
    setTimeout(() => dispatch(requestProjectDataSuccess(data)), 2000);
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

const requestProjectDataFailed = () => {
  return {
    type: homeTypes.PROJECT_DATA_FAILED,
  }
}

export {
  fetchProjects
}
