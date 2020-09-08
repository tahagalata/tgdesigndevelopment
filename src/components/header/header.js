import React, { Component } from 'react';
import './header.scss';
import Navbar from '../navbar/navbar';
import HamburgerMenuIcon from './hamburger.svg'

export default class Header extends Component {
  render() {
    return (
      <header>

        <button className='menu-button'>
          <img src={HamburgerMenuIcon} alt='menu'></img>
        </button>

        <Navbar activeSection={this.props.activeSection}/>
      </header>
    )
  }
}
