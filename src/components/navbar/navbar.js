import React, {Component} from 'react';
import {Link} from 'gatsby';
import './navbar.scss'
import brandLogo from './assets/brand.svg'
import NavbarLinks from './navbarLinks/navbarLinks'
import SocialAndDarkMode from './socialAndDarkMode/socialAndDarkMode'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        
        <Link className='brand_logo_div' to='#home'>
          <img src= {brandLogo} alt='brand logo' />
        </Link>

        <NavbarLinks activeSection={this.props.activeSection}/>
        <SocialAndDarkMode/>
        
      </nav>
    )
  }
}

export default Navbar;