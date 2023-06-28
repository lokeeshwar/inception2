import React from 'react'
import { FiMail } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import "./topbar.css"


export default function Topbar() {
  return (
    <div id='topbar'>
        <div className='container'>
        <div className='contactInfo-left'>
            <i className='icon-envelope'>
                <FiMail/> 
            </i>
            <a className='companymail' href='mailto:contact@example.com'>support@myinceptiontech.co.in</a>
            <i className='icon-phone'><FiPhoneCall/></i>
            9884792981 / 9176777890
        </div>
        <div className='signup-right'>
        <a className='nav-link' href='http://www.myinceptiontech.com/login'>Login</a>
        <a className='nav-link' href='http://www.myinceptiontech.com/register'>Register</a>
        </div>
        </div>
       
    </div>

    
  )
}
