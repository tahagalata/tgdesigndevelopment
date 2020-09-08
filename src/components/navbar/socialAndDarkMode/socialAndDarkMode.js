import React, {Component} from 'react';
import './socialAndDarkMode.scss';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
// import dribbble from './assets/dribbble.svg';
// import darkmode from './assets/darkmode.svg';

class socialAndDarkMode extends Component {
  render() {
    return (
      <div className='icons-layout'>
        <div className='social-group'>
          
          <div className='social'>
            <img className='test' src={instagram} alt='instagram' />
          </div>

          <div className='social'>
            <img src={facebook} alt='facebook' />
          </div>

          <div className='social'>
            <img src={linkedin} alt='linkedin' />
          </div>

          <div className='social'>
            <img src={github} alt='github' />
          </div>

          {/* <div className='social'>
            <img src={dribbble} alt='dribbble' />
          </div> */}

        </div>

        {/* <div className='darkmode_button'>
          <img src={darkmode} alt='dark mode button' />
        </div> */}
      </div>
      
    )
  }
}

export default socialAndDarkMode;