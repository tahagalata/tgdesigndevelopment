import React from 'react'
import './socialAndDarkMode.scss'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'

export default function socialAndDarkMode() {
  return (
    <div className='icons-layout'>
      <div className='social-group'>
        
        <a
          href='https://instagram.com/tgdesigndev/'
          target='_blank'
          rel='noreferrer'
          className='social'
        >
          <img className='test' src={instagram} alt='instagram' />
        </a>

        <a
          href='https://linkedin.com/in/tahagalata/'
          target='_blank'
          rel='noreferrer'
          className='social'
        >
          <img src={linkedin} alt='linkedin' />
        </a>

        <a
          href='https://github.com/tahagalata'
          target='_blank'
          rel='noreferrer'
          className='social'
        >
          <img src={github} alt='github' />
        </a>
        
      </div>
    </div>
    
  )
}