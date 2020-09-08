import React, { Component } from 'react';
import './header.scss';
import Navbar from '../navbar/navbar';
import HamburgerMenuIcon from './hamburger.svg';
import BrandLogo from '../brandLogo/brandLogo';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarVisible: false
    }
  }

  visibilityToggle() {
    this.setState({navbarVisible: !this.state.navbarVisible})
  }

  render() {
     return (
      <header>
        <div className='top-menu'>
          <BrandLogo screen='small'/>
          <button className='menu-button'
          onClick={this.visibilityToggle.bind(this)}>
            <img src={HamburgerMenuIcon} alt='menu'></img>
          </button>
        </div>
        
        {this.state.navbarVisible && <Navbar activeSection={this.props.activeSection}/>}

      </header>
    )
  }
}
