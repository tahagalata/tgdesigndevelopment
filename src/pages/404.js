import React from 'react'
import '../main.scss'
import Button from '../components/button/button'
import Helmet from 'react-helmet'

export default function fourOhFour() {
  const divStyle = {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }

  const contactStyle = {
    textAlign:'center'
  }

  return (
    <>
      <Helmet>
        <title>404 | Taha Galata</title>
        <meta charSet="utf-8" />
        <html lang='en' />
        <meta name='description' content='Personal Portfolio Website, Page Not Found'/>
        <meta name='author' content='Taha Galata' />
      </Helmet>
      <div style={divStyle}>
        <h1>Page you are trying to reach does not exist.</h1>
        <h3>404 Not Found</h3>
        <br />
        <Button>Go Homepage</Button>
      </div>
      <h3 style={contactStyle}>Do you think that's a mistake? <a href='mailto: taha9alata@gmail.com' target='_blank' rel='noreferrer'>Contact Me</a>
      </h3>
    </>
  )
}
