import React, { Component } from 'react';
import {Link} from 'gatsby';
import './button.scss'

class CustomButton extends Component {
  render() {
    let button = null;

    if (this.props.children === 'Get in Touch') {
      button = <a className='button primary' href='mailto: taha9alata@gmail.com' target='_blank' rel='noreferrer'>
      {this.props.children}
      </a>
    }

    else if (this.props.children === 'See My Work') {
      button = <Link className='button ghost' to='#mywork'>
      {this.props.children}
      </Link>
    }

    else if (this.props.children === 'See This Project') {
      button = <Link className='button primary' to='/work'>
      {this.props.children}
      </Link>
    }

    return (
      <div className='button-div'>
        {button}
        <div className='button-shadow'>
          {this.props.children}
        </div>
      </div>
    )
  } 
}

export default CustomButton;