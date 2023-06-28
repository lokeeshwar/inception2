import React from 'react'
import Marquee from "react-fast-marquee";
// import './marquee.css'

export default function Scroll() {
  return (
    <div className='scr'>
      <h2>Current Jobs</h2>
      <Marquee>
        <p>IT Company Job In Bangalore Date:13.5.2015 APPLY</p><br />
        <p>Civil Job In Chennai Date:13.5.2015 APPLY</p>
      </Marquee>
    </div>
  )
}
