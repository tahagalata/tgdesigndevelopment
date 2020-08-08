import React, { Fragment } from "react"
import '../main.scss'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/sections/hero/hero'
import WhatIDo from '../components/sections/whatido/whatido'
import GetInTouch from '../components/sections/getInTouch/getInTouch'

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
      <WhatIDo/>
      <GetInTouch/>
    </Fragment>
  )
}
