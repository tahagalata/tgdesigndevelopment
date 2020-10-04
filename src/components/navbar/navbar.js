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

//Handles outside clicks
const EnhancedNavbar = onClickOutside(Navbar)

class Container extends Component {
  render(evt) {
    const {activeSection, isSmallScreen, visibilityToggle, isOpen} = this.props
    return <EnhancedNavbar
      isOpen={isOpen}
      activeSection = {activeSection}
      isSmallScreen = {isSmallScreen}
      visibilityToggle = {visibilityToggle}
      disableOnClickOutside={!isSmallScreen || !isOpen}
      outsideClickIgnoreClass={'menu-button'}
    />
  }
}

export default Container