import React from 'react';
import Button from './Button.jsx';
import Menu from './Menu.jsx';
import './NavBar.scss';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = { isOpen: false, isActive: false };
  }

  onUpdate() {
    this.setState({isOpen: !this.state.isOpen, isActive: !this.state.isActive});
  }

  render() {
    return (
      <div>
        <Button isActive={this.state.isActive} onUpdate={this.onUpdate}/>
        <Menu isOpen={this.state.isOpen} onUpdate={this.onUpdate}/>
      </div>
    );
  }
}

export default NavBar;
