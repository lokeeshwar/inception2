import React from 'react'
import './counts.css'
import Onelogo from './one.jsx/one'
import Twologo from './two.jsx/two'
import Threelogo from './three.jsx/three'
import Fourlogo from './four.jsx/four'

export default function Counts() {
  return (
    <div className='counts'>
        <h2>We Offers</h2>
        <div className='counts-flex'>
        <Onelogo/>
        <Twologo/>
        <Threelogo/>
        <Fourlogo/>
        </div>

    </div>
  )
}
