import React from 'react';
import './ContactSection.scss';


class Footer extends React.Component {
  render() {
    return (
      <footer>&copy; {new Date().getFullYear()} Abhishek Gupta</footer>
    );
  }
}

export default Footer;
