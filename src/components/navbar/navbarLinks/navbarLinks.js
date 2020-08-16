import React, {Component} from 'react';
import './navbarLinks.scss'
import {Link} from 'gatsby';

class NavbarLinks extends Component {
  render() {
    return (
      <div className='link_layout'>
          <Link className='link' to='#home'>HOME</Link>

          <Link className='link' to='#whatido'>WHAT I DO</Link>

          <Link className='link' to='#mywork'>MY WORK </Link>

          <Link className='link' to='#getintouch'>GET IN TOUCH</Link>
      </div>
    )
  }
}

export default NavbarLinks;