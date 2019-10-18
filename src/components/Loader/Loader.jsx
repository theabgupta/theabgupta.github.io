import React from 'react';
import './Loader.scss';


class Loader extends React.Component {
  render() {
    return (
      <div id="loader-wrapper">
        <div className="loader">
          <div className="loader-inner">
            <span className="loader-text">loading</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
