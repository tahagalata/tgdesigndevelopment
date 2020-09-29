import React, {Component} from 'react';
import './mywork.scss';
import Work from './work/work'

class MyWork extends Component {
  render() {
    return (
      <section className='mywork section' id='mywork'>
        <h1>My Work</h1>
        <Work 
        spec='Latest Work' 
        title='Team App Website'
        tags={['Website Design', 'Webflow Development', 'Concept']}
        picName={'teamApp'}
        >
          Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.
        </Work>

        <Work
        spec='Latest Work'
        title='Chat App Website'
        tags={['Website Design', 'Webflow Development', 'Concept']}
        picName={'chatApp'}
        reverse = {true}
        >
          This is a homepage design and build for a concept project – a chat application. I designed the page first then built a responsive web page using Webflow.
        </Work>
      </section>
    )
  }
}

export default MyWork;