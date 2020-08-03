import React, { Fragment } from "react"
import '../main.scss'
import Navbar from '../components/navbar/navbar'
import Hero from '../sections/hero/hero'

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
    </Fragment>
  )
}
