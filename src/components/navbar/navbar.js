import React, {Component} from 'react';
import './navbar.scss'
import brandLogo from './assets/brand.svg'
import NavbarLinks from './navbarLinks/navbarLinks'
import SocialAndDarkMode from './socialAndDarkMode/socialAndDarkMode'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        
        <div className='brand_logo_div'>
          <img src= {brandLogo} alt='brand logo' />
        </div>

        <NavbarLinks activeSection={this.props.activeSection}/>
        <SocialAndDarkMode/>
        
      </nav>
    )
  }
}

export default Navbar;