import React, {Component} from 'react';
import './getInTouch.scss';
import SectionWrapper from '../sectionWrapper/sectionWrapper';
import atsign from './@.svg';
import Button from '../../button/button'

class GetInTouch extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className='container' id='get-in-touch-section'>
          <div className='at-div'>
            <div className='at-sign'>
              <img src={atsign} alt='@ sign'/>
            </div>
            <h1 className='at-heading'>Get in Touch</h1>
          </div>

          <div className='content'>
            <p className='content-paragraph'>
              If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly at <span>taha9alata@gmail.com</span>.
            </p>
            <Button type='primary'>Get in Touch</Button>
          </div>
        </div>
        
      </SectionWrapper>
    )
  }
}

export default GetInTouch;