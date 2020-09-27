import React, {Component} from 'react';
import './work.scss';
import Tag from './tag/tag';
import Button from '../../../button/button';

class Work extends Component {
  render() {
    return (
      <div className= {this.props.reverse ? 'work reverse': 'work'}>
        <div className='work-content'>
          <h3>{(this.props.spec).toUpperCase()}</h3>
          <h2>{this.props.title}</h2>
          <div className='tag-container'>
            {this.props.tags.map(tag => <Tag key ={tag}>{tag}</Tag>)}
          </div>
          <p className='work-paragraph'>
            {this.props.children}
          </p>
          <Button>See This Project</Button>
        </div>
        <div className={this.props.reverse? 'reverse-photo' : 'photo'} >
          <img 
            src= {require(`../assets/${this.props.picName}.png`)} 
            alt='work'
            />
        </div>
      </div>
    )
  }
}

export default Work;