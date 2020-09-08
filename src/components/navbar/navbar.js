import React, {Component} from 'react';
import './navbar.scss';
import NavbarLinks from './navbarLinks/navbarLinks';
import SocialAndDarkMode from './socialAndDarkMode/socialAndDarkMode';
import BrandLogo from '../brandLogo/brandLogo';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        
        <BrandLogo />

        <NavbarLinks activeSection={this.props.activeSection}/>
        <SocialAndDarkMode/>
        
      </nav>
    )
  }
}

export default Navbar;