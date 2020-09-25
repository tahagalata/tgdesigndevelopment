import React, {Component} from 'react';
import './getInTouch.scss';
import atsign from './@.svg';
import Button from '../../button/button'

class GetInTouch extends Component {
  render() {
    return (
      <section className='get-in-touch section' id='getintouch'>
        <div className='main-container'>
          <div className='at-div'>
            <div className='at-sign'>
              <img src={atsign} alt='@ sign'/>
            </div>
            <h1 className='at-heading'>Get in Touch</h1>
          </div>

          <div className='content'>
            <p className='content-paragraph'>
              If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly at <span>
                <a href='mailto: taha9alata@gmail.com' 
                target='_blank' 
                rel='noreferrer'
                >taha9alata@gmail.com</a>
              </span>.
            </p>
            <Button>Get in Touch</Button>
          </div>
        </div>
      </section>
    )
  }
}

export default GetInTouch;