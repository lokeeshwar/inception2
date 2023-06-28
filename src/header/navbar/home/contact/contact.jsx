import React from 'react'
import './contact.css'
import Address from './address/address'
import Mail from './mail/mail'
import Phno from './phno/phno'


export default function Contact() {
  return (
    <div>
        <h2>Contact Us</h2>
        <div className='cif'>
            <Address/>
            <Mail/>
            <Phno/>
        </div>
    </div>
  ) 
}


