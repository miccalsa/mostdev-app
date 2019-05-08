import React from 'react';

import ProjectItem from './project-item';

import './home-layout.css';

const ProjectList = (props) => {
  return (
    <div className="ProjectBox_Layout">
      <h4>Projects Sandbox</h4>
      <div className="ProjectBox">
        {
          props.projects.map(project => (
            <ProjectItem key={project.id} details={project} />
          ))
        }
      </div>
    </div>
  );
}

export default ProjectList;
