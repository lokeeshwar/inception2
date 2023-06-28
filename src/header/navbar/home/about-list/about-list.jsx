import React from 'react'
import './about-list.css'
import Abtleft from './left/abtleft'
import Abtmid from './mid/abtmid'
import Abtright from './right/abtright'

export default function Aboutlist() {
  return (
    <div className='abtlist'>
        <Abtleft/>
        <Abtmid/>
        <Abtright/>
    </div>
  )
}
