import React from 'react';
import './ContactSection.scss';


class Mobile extends React.Component {
  render() {
    return (
      <h2 className="btn btn-link">
        <div className="box1">
          <div className="blue-btn">
            <div className="first-link">
              <i className="fa fa-mobile"></i>
            </div>
            <a href="tel:+91 9782135409">
              <span>9782135409</span>
            </a>
          </div>
        </div>
      </h2>
    );
  }
}

class Email extends React.Component {
  render() {
    return (
      <h2 className="btn btn-link">
        <div className="box1">
          <div className="blue-btn">
            <div className="first-link">
              <i className="fa fa-envelope"></i>
            </div>
            <a href="mailto:abgupta.456@gmail.com">
              <span>abgupta.456@gmail.com</span>
            </a>
          </div>
        </div>
      </h2>
    );
  }
}

class MobileEmail extends React.Component {
  render() {
    return (
      <div className="row">
        <Mobile/>
        <Email/>
      </div>
    );
  }
}

export default MobileEmail;
