import React from 'react'
import './whatido.scss'
import ServiceDiv from './service-div/service-div'

export default function WhatIDo() {
  return (
    <section className='what-i-do section' id='whatido'>
      <h1 className='heading'>What I Do</h1>
      <div className='services-div'>
        <ServiceDiv type='design' heading='UI & UX Design'>
          Whether it is a website or mobile app design, I deliver the perfect combination of unique visual aesthetics and joyful user experience.
        </ServiceDiv>

        <ServiceDiv type='webdev' heading='Web Development'>
          I deliver fully responsive, reliable and performant websites using the latest technologies like Webflow, React.js and Gatsby.js that fits my clients’ needs and budgets.
        </ServiceDiv>

      </div>
    </section>
  )
}