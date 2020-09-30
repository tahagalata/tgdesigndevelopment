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
    return (
      <nav className='navbar'>
        
        <BrandLogo screen='big'/>

        <NavbarLinks activeSection={this.props.activeSection}/>
        <SocialAndDarkMode/>
        
      </nav>
    )
  }
}

const EnhancedNavbar = onClickOutside(Navbar)

class Container extends Component {
  render(evt) {
    const {activeSection, isSmallScreen, visibilityToggle} = this.props
    return <EnhancedNavbar
      activeSection = {activeSection}
      isSmallScreen = {isSmallScreen}
      visibilityToggle = {visibilityToggle}
      disableOnClickOutside={!isSmallScreen}
      outsideClickIgnoreClass={'menu-button'}
    />
  }
}

export default Container