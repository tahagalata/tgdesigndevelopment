import React, {Component} from 'react';
import './navbar.scss';
import NavbarLinks from './navbarLinks/navbarLinks';
import SocialAndDarkMode from './socialAndDarkMode/socialAndDarkMode';
import BrandLogo from '../brandLogo/brandLogo';
import onClickOutside from "react-onclickoutside";

class Navbar extends Component {
  handleClickOutside = () => {
    this.props.visibilityToggle()
  }

  render() {
    const {isOpen, isSmallScreen, activeSection} = this.props

    return (
      <nav className={isOpen && isSmallScreen ? 
      'navbar smallNavbar' : 'navbar'}>
        <BrandLogo screen='big'/>
        <NavbarLinks activeSection={activeSection}/>
        <SocialAndDarkMode/>
      </nav>
    )
  }
}

export default Navbar