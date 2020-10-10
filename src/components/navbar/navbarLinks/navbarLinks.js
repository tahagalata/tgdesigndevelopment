import React from 'react'
import './navbarLinks.scss'
import {Link} from 'gatsby'

export default function NavbarLinks(props) {
  const section = props.activeSection;

  return (
    <div className='link_layout'>
      <ul>
        
        <li>
          <Link className={section === 'hero' ? 'link active' : 'link'}
          to='#home'>HOME
          </Link>
        </li>

        <li>
          <Link className={section === 'mywork' ? 'link active' : 'link'}
          to='#mywork'>MY WORK
          </Link>
        </li>

        <li>
          <Link className={section === 'whatido' ? 'link active' : 'link'}
          to='#whatido'>WHAT I DO
          </Link>
        </li>

        <li>
          <Link className={section === 'getintouch' ? 'link active' : 'link'}
          to='#getintouch'>GET IN TOUCH
          </Link>
        </li>

      </ul>
    </div>
  )
}