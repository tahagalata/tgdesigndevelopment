import React, {Component} from 'react';
import './button.scss'

class CustomButton extends Component {
  render() {
    return (
      <div className='button-div'>
        <div className='primary-button-div'>
          <button className='primary-button'>Get in Touch
          </button>
          <div className='button-shadow'></div>
        </div>
        <div className='ghost-button-div'>
          <button className='ghost-button'>See My Work
          </button>
          <div className='button-shadow'></div>
        </div>
      </div>
    )
  }
}

export default CustomButton;