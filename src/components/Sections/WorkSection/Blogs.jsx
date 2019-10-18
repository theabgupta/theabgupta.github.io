import React from 'react';
import './WorkSection.scss';


class Blogs extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="blogs">
          <a href="https://medium.com/@theabgupta" target="_blank" data-hover="Blogs">
            <span>Blogs</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Blogs;
