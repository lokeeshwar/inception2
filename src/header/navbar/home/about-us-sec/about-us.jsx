import React from 'react'
import './about-us.css'
import Content from './content/content'
import Scroll from './content/marquee/marquee'
import Pic from './pic/pic'

export default function Aboutsec() {
  return (
    <div className='main'>
      <Pic/>
      <div className='rightside'>
      <Content/>
      <Scroll/>
      </div>
    
    </div>
  )
}
