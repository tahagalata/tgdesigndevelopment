import React from 'react'
import './work.scss'
import Tag from './tag/tag'
import Button from '../../../button/button'

export default function Work(props) {
  const {reverse, spec, title, tags, children, picName, liveSiteUrl} = props
  
  return (
    <div className= {reverse ? 'work reverse': 'work'}>
      <div className='work-content'>
        <h3>{spec.toUpperCase()}</h3>
        <h2>{title}</h2>
        <div className='tag-container'>
          {tags.map(tag => <Tag key ={tag}>{tag}</Tag>)}
        </div>
        <p className='work-paragraph'>
          {children}
        </p>
        <Button liveSiteUrl= {liveSiteUrl}>View Live Site</Button>
      </div>
      <div className={reverse? 'reverse-photo' : 'photo'} >
        <img 
          src= {require(`../assets/${picName}.png`)} 
          alt='work'
          />
      </div>
    </div>
  )
}