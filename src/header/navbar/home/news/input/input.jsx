import React from 'react'
import './input.css'

export default function Input() {
  return (
    <div className='in'>
        <input type="email" class="form-control" placeholder="Enter your email"/>
        <button class="btn" type="submit">Subscribe Now</button>
    </div>
  )
}
