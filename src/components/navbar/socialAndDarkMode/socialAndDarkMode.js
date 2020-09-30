import React, {Component} from 'react';
import './socialAndDarkMode.scss';
import instagram from './assets/instagram.svg';
// import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
// import dribbble from './assets/dribbble.svg';
// import darkmode from './assets/darkmode.svg';

class socialAndDarkMode extends Component {
  render() {
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
}

export default socialAndDarkMode;