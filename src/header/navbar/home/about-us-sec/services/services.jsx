import React from 'react'
import './services.css'
import First from './firstimg/first'
import Second from './secondimg/second'

export default function Services() {
  return (
    <div>
        <div class="section-title">
            <h2>Welcome to My Inception</h2>
        </div>
        <div className='imgBlock'>
          <First/>
          <Second/>
        </div>
    </div>
  )
}
