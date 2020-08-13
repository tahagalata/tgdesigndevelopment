import React, {Component} from 'react';
import './work.scss';
import Dots from '../assets/Dots.svg';
import Tag from './tag/tag';
import Button from '../../../button/button';

class Work extends Component {
  render() {
    return (
      <div className={this.props.reverse ? 'work reverse': 'work'}>
        <div className='work-content'>
          <h3>{(this.props.spec).toUpperCase()}</h3>
          <h2>{this.props.title}</h2>
          <div className='tag-container'>
            {this.props.tags.map(tag => <Tag>{tag}</Tag>)}
          </div>
          <p className='work-paragraph'>
            {this.props.children}
          </p>
          <Button type='primary'>See This Project</Button>
        </div>
        <div className='work-photo'>
          <div className='dots'>
            <img src={Dots} alt='dot pattern' />
          </div>
          <div className='upper-photo'>
            <img 
            src= {require(`../assets/${this.props.picsPaths[0]}.jpg`)} 
            alt='work 1'
            />
          </div>
          <div className='lower-photo'>
            <img 
            src= {require(`../assets/${this.props.picsPaths[1]}.jpg`)} 
            alt='work 2'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Work;