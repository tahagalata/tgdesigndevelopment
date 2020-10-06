import React, { Component } from 'react';
import './header.scss';
import Navbar from '../navbar/navbar';
import HamburgerMenuIcon from './hamburger';
import BrandLogo from '../brandLogo/brandLogo';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarVisible: false,
      isSmallScreen: false
    }
  }

  visibilityToggle = () => {
    this.setState(prevState => ({navbarVisible: !prevState.navbarVisible}))
  }

  handleScreenSize = () => {
    this.setState(window.innerWidth > 900 ? 
      {navbarVisible: true, isSmallScreen: false} : 
      {navbarVisible:false, isSmallScreen: true})
  }

  componentDidMount() {
    this.handleScreenSize()
    window.addEventListener('resize', this.handleScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreenSize);
  }

  render() {
    const {navbarVisible, isSmallScreen} = this.state

    return (
      <header>
        <div className='top-menu'>
          <BrandLogo screen='small'/>
          <button 
            className={navbarVisible && isSmallScreen ? 'opened menu-button' : 'menu-button'}
            onClick={this.visibilityToggle}
            id='menu-button'
          >
            <HamburgerMenuIcon />
          </button>
        </div>
        
        <Navbar activeSection={this.props.activeSection} 
        isSmallScreen={isSmallScreen}
        visibilityToggle={this.visibilityToggle}
        isOpen={navbarVisible}
        />

      </header>
    )
  }
}
