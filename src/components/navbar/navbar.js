import React, {Component} from 'react';
import './navbar.scss';
import NavbarLinks from './navbarLinks/navbarLinks';
import SocialAndDarkMode from './socialAndDarkMode/socialAndDarkMode';
import BrandLogo from '../brandLogo/brandLogo';

class Navbar extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false)
    document.addEventListener('touchstart', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
    document.removeEventListener('touchstart', this.handleClick, false)
  }

  handleClick = (e) => {
    const condition = !this.node.contains(e.target) 
      && this.props.isOpen 
      && this.props.isSmallScreen
      && e.target.id !== 'menu-button-icon'
      && e.target.id !== 'menu-button'

    condition && this.props.visibilityToggle()
  }

  render() {
    const {isOpen, isSmallScreen, activeSection} = this.props

    return (
      <nav ref={node => this.node = node} className={isOpen && isSmallScreen ? 
      'navbar smallNavbar' : 'navbar'}>
        <BrandLogo screen='big'/>
        <NavbarLinks activeSection={activeSection}/>
        <SocialAndDarkMode/>
      </nav>
    )
  }
}

export default Navbar