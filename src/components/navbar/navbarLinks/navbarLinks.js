import React, {Component} from 'react';
import './navbarLinks.scss'

class NavbarLinks extends Component {
  render() {
    return (
      <div className='link_layout'>
        <div className='link'>HOME</div>
        <div className='link'>WHAT I DO</div>
        <div className='link'>MY WORK </div>
        <div className='link'>GET IN TOUCH</div>

      </div>
    )
  }
}

export default NavbarLinks;