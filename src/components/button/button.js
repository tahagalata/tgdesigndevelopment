import React, { Component } from 'react';
import './button.scss'

class CustomButton extends Component {
  render() {
    return (
      <div className='button-div'>
        <button 
          className={this.props.type}>
          {this.props.children}
        </button>
        <div className='button-shadow'/>
      </div>
    )
  } 
}

export default CustomButton;