import React from 'react';
import {Link} from 'gatsby';
import './button.scss'

export default function CustomButton({children, liveSiteUrl}) {
  let button;

  if (children === 'Get in Touch') {
    button = <a className='button primary' href='mailto: taha9alata@gmail.com' target='_blank' rel='noreferrer'>
    {children}
    </a>
  }

  else if (children === 'See My Work') {
    button = <Link className='button ghost' to='#mywork'>
    {children}
    </Link>
  }

  else if (children === 'View Live Site') {
    button = <a className='button primary' href={liveSiteUrl} target='_blank' rel='noreferrer'>
    {children}
    </a>
  }

  return (
    <div className='button-div'>
      {button}
      <div className='button-shadow'>
        {children}
      </div>
    </div>
  )
}