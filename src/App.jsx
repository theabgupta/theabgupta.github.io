import React from 'react';
import Loader from './components/Loader/Loader.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Hello from './components/Sections/HelloSection/HelloSection.jsx';
import Work from './components/Sections/WorkSection/WorkSection.jsx';
import Contact from './components/Sections/ContactSection/ContactSection.jsx';


class App extends React.Component {
  componentDidMount() {
      $(window).load(function(){
          $('#loader-wrapper').delay(500).fadeOut();
          $('body').addClass('loaded');
      });

      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if( $(this).scrollTop() != 0 )
    {
      $(".button_container").css('opacity', '0.3');
    }
    else
    {
      $(".button_container").css('opacity', '1');
    }
  }

  render() {
    return (
      <div>
        <Loader/>
        <NavBar/>
        <Hello/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

export default App;
