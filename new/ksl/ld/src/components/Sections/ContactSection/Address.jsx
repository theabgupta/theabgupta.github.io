import React from 'react';
import './ContactSection.scss';


const addressStyle = {
  textDecoration: 'none',
  borderBottom: '1px solid #222222'
};

class Address extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="box2">
          <div className="block" align="center">
            <h2 className="text-center address">
              <u style={addressStyle}>Address</u>
            </h2>
            <h5 className="text-center address-text">
              Kanan Vihar - Phase II<br></br>
              Nandan Kanan Road<br></br>
              Patia, Chandrasekharpur<br></br>
              Bhubaneshwar, Odisha<br></br>
              PIN Code - 751031
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
