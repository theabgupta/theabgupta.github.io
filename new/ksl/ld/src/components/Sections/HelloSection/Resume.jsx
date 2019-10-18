import React from 'react';
import './HelloSection.scss';


class Resume extends React.Component {
  render() {
    return (
        <nav className="resume">
          <a href="/resume.pdf" target="_blank">Resume</a>
				</nav>
    );
  }
}

export default Resume;
