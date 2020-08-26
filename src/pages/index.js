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
        offset={{top:400, bottom:400}}
        >
          <Hero/>
        </VisibilitySensor>

        <VisibilitySensor
        onChange={(isVisible) => this.onSectionChange(isVisible,'mywork')}
        partialVisibility= {true}
        offset={{top:400, bottom:400}}
        >
          <MyWork/>
        </VisibilitySensor>

        <VisibilitySensor
        onChange={(isVisible) => this.onSectionChange(isVisible,'whatido')}
        partialVisibility= {true}
        offset={{top:400, bottom:400}}
        >
          <WhatIDo/>
        </VisibilitySensor>

        <VisibilitySensor
        onChange={(isVisible) => this.onSectionChange(isVisible,'getintouch')}
        partialVisibility= {true}
        offset={{top:400, bottom:400}}
        >
          <GetInTouch/>
        </VisibilitySensor>
        
      </Fragment>
    )
  }
}