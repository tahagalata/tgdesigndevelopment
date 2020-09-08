import React, { Component } from 'react';
import './header.scss';
import Navbar from '../navbar/navbar';
import HamburgerMenuIcon from './hamburger.svg';
import BrandLogo from '../brandLogo/brandLogo';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='top-menu'>
          <BrandLogo screen='small'/>
          <button className='menu-button'>
            <img src={HamburgerMenuIcon} alt='menu'></img>
          </button>
        </div>

        <Navbar activeSection={this.props.activeSection}/>
      </header>
    )
  }
}
