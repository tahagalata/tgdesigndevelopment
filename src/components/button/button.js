import React from 'react';
import {Link} from 'gatsby';
import './button.scss'

export default function CustomButton(props) {
  let button;
  const {children} = props

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

  else if (children === 'See This Project') {
    button = <Link className='button primary' to='/work'>
    {children}
    </Link>
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