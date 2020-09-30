import React from 'react';
import './navbar.scss';
import NavbarLinks from './navbarLinks/navbarLinks';
import SocialAndDarkMode from './socialAndDarkMode/socialAndDarkMode';
import BrandLogo from '../brandLogo/brandLogo';

export default function Navbar(props) {
  return (
    <>
      <nav className='navbar'>
        
        <BrandLogo screen='big'/>

        <NavbarLinks activeSection={props.activeSection}/>
        <SocialAndDarkMode/>
        
      </nav>

      {props.isSmallScreen && 
      <div className='overlay' 
      onClick={props.visibilityToggle}
      onKeyDown={props.visibilityToggle}
      aria-hidden='true'
      />}
    </>
  )
}