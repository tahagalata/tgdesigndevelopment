import React, { Fragment } from "react"
import '../main.scss'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/sections/hero/hero'
import WhatIDo from '../components/sections/whatido/whatido'
import MyWork from '../components/sections/mywork/mywork'
import GetInTouch from '../components/sections/getInTouch/getInTouch'

export default function Home() {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <Fragment>
      <Navbar/>
      <Hero/>
      <WhatIDo/>
      <MyWork/>
      <GetInTouch/>
    </Fragment>
  )
}
