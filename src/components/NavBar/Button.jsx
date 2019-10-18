import React from 'react';
import './NavBar.scss';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onUpdate();
  }

  render() {
    return (
      <div className={`button_container ${this.props.isActive ? 'active' : ''}`} id="toggle" onClick={this.handleClick}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
    );
    }
}

export default Button;
