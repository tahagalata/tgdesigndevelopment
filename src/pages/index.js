import React, { Component, Fragment } from "react"
import VisibilitySensor from 'react-visibility-sensor';
import '../main.scss'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/sections/hero/hero'
import WhatIDo from '../components/sections/whatido/whatido'
import MyWork from '../components/sections/mywork/mywork'
import GetInTouch from '../components/sections/getInTouch/getInTouch'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      visibleSection: 'hero'
    }
  }

  onSectionChange(isVisible, section) {
    if (isVisible) {
      this.setState({
        visibleSection: section
      });
      console.log(section);
    }
  }

  render() {
    if (typeof window !== "undefined") {
      require("smooth-scroll")('a[href*="#"]')
    }

    return (
      <Fragment>
        <Navbar activeSection={this.state.visibleSection}/>
        <VisibilitySensor
        onChange={(isVisible) => this.onSectionChange(isVisible,'hero')}
        partialVisibility= {true}
        >
          <Hero/>
        </VisibilitySensor>

        <VisibilitySensor
        onChange={(isVisible) => this.onSectionChange(isVisible,'whatido')}
        partialVisibility= {true}
        >
          <WhatIDo/>
        </VisibilitySensor>

        <VisibilitySensor
        onChange={(isVisible) => this.onSectionChange(isVisible,'mywork')}
        partialVisibility= {true}
        >
          <MyWork/>
        </VisibilitySensor>

        <VisibilitySensor
        onChange={(isVisible) => this.onSectionChange(isVisible,'getintouch')}
        partialVisibility= {true}
        >
          <GetInTouch/>
        </VisibilitySensor>
        
      </Fragment>
    )
  }
}