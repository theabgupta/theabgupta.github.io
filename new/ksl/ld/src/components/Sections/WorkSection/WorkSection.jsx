import React from 'react';
import Projects from './Projects.jsx';
import Blogs from './Blogs.jsx';
import './WorkSection.scss';


class Work extends React.Component {
  render() {
    return (
      <section className="section" id="work">
        <div className="container">
          <div className="work-wrapper">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 text-center">
                <Projects/>
                <Blogs/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
