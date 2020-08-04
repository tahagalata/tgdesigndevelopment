import React, {Component} from 'react';
import './hero.scss';
import SectionWrapper from '../../components/sectionWrapper/sectionWrapper';
import heroPhoto from './herophoto.png'

class Hero extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className='hero'>
  
          <div classsName='corner-lines'>
            <div className='vertical-line'></div>
            <div className='horizantal-line'></div>
          </div>
          
          <div className='hero-content'>
            <h1>Hello</h1>
            <h1>I'm Taha Galata</h1>
            <p className='hero-paragraph'>I am a web designer and web developer based in Çanakkale / Turkey. <span className='email-span'>Email me</span> if you think we should be working together on exciting projects.
            </p>
          </div>
          
          <div className='hero-photo'>
            <img src={heroPhoto} alt='heroshot'/>
          </div>
          
        </div>
      </SectionWrapper>
    )
  }
}

export default Hero;