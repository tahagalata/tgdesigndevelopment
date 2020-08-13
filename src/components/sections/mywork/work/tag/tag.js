import React from 'react'
import './tag.scss'

export default function tag(props) {
  return (
    <div className='tag-div'>
      {props.children}
    </div>
  )
}
