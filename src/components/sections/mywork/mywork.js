import React, {Component} from 'react';
import './mywork.scss';
import SectionWrapper from '../sectionWrapper/sectionWrapper';
import Work from './work/work'

class MyWork extends Component {
  render() {
    return (
      <SectionWrapper>
        <Work/>
      </SectionWrapper>
    )
  }
}

export default MyWork;