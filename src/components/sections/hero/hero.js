import React from 'react'
import './hero.scss'
import Button from '../../button/button'
import heroPhoto from './herophoto.png'

export default function Hero() {
  return (
    <section className='hero section' id='home'>
      
      <div className='hero-content'>
        <h1>Hello</h1>
        <h1>I'm Taha Galata</h1>
        <p className='hero-paragraph'>I am a web designer and web developer based in Istanbul / Turkey. <span>
          <a href='mailto: taha9alata@gmail.com' 
              target='_blank' 
              rel='noreferrer'
              >Email me</a>
              </span> if you think we should be working together on exciting projects.
        </p>
        
        <div className='button-layout'>
          <Button>Get in Touch</Button>
          <Button>See My Work</Button>
        </div>
      </div>
      
      <div className='hero-photo'>
        <img src={heroPhoto} alt='heroshot'/>
      </div>
      
    </section>
  )
}