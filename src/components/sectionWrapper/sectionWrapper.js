import React, {Component} from 'react';
import './sectionWrapper.scss'

class Section extends Component {
  render() {
    return (
      <div className='section-wrapper'>
        {this.props.children}
      </div>
    )
  }
}

export default Section;