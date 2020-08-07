import React, { Fragment } from "react"
import '../main.scss'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/sections/hero/hero'

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
    </Fragment>
  )
}
