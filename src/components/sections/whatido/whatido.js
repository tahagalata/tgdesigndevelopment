import React, { Component } from 'react';
import './whatido.scss';
import SectionWrapper from '../sectionWrapper/sectionWrapper';
import ServiceDiv from './service-div/service-div'

class WhatIDo extends Component {
  render() {
    return (
      <SectionWrapper>
        <div className='what-i-do-div' id='what-i-do-section'>
          <h1 className='heading'>What I Do</h1>
          <div className='services-div'>
            <ServiceDiv type='design' heading='Design'>
              Whether it is a website or mobile app design, I deliver the perfect combination of unique visual aesthetics and joyful user experience.
            </ServiceDiv>

            <ServiceDiv type='webdev'
            heading='Website Development'>
              I deliver fully responsive, reliable and performant websites using the latest technologies like Webflow, React.js and Gatsby.js that fits my clients’ needs and budgets.
            </ServiceDiv>

            <ServiceDiv type='webmaintenance' 
            heading='Website Maintenance'>
              I perform regular checks and maintenance on the websites I’ve built to ensure their performance and security so that my clients can rest assured.
            </ServiceDiv>

            <ServiceDiv type='copywriting' heading='Copywriting'>
              I write powerful and persuasive copies that complement my clients products or businesses, with the websites I’ve built. Therefore I can deliver a complete package to my clients that is ready to publish.
            </ServiceDiv>
          </div>
        </div>
        
      </SectionWrapper>
    )
  }
}

export default WhatIDo;