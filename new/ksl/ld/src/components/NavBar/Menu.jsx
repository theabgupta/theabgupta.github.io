import React from 'react';
import './NavBar.scss';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var current_item = 0;
    const section_hide_time = 800;
    const section_show_time = 800;
    if( ! $(e.target).hasClass('active') ) {
      current_item = e.target;
      $('span', '.overlay-menu').removeClass( 'active' );
      $(current_item).addClass( 'active' );
      $('span', '.overlay-menu').addClass( 'non-active' );
      $(current_item).removeClass( 'non-active' );
      $('.section:visible').fadeOut( section_hide_time, function() {
        var new_section = $(current_item.id);
        new_section.fadeIn( section_show_time );
      } );
    }
    this.props.onUpdate();
  }

  render() {
    return (
      <div className={`overlay ${this.props.isOpen ? 'open' : ''}`} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <span id="#hello" className="active" onClick={this.handleClick}>Hello</span>
            </li>
            <li>
              <span id="#work" className="non-active" onClick={this.handleClick}>Work</span>
            </li>
            <li>
              <span id="#contact" className="non-active" onClick={this.handleClick}>Get in Touch</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
