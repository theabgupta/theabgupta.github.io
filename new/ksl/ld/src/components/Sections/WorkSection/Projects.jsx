import React from 'react';
import './WorkSection.scss';


class Projects extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="projects">
          <a href="https://github.com/theabgupta" target="_blank" data-hover="Projects">
            <span>Projects</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Projects;
