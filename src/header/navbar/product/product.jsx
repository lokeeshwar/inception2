import React from 'react'
import './product.css'
import Crm from './crm/crm'
import Hrms from './hrms/hrms'
import Erp from './erp/erp'
import Android from './android/android'

export default function Product() {
    return (
      <div className='pdct'>
          <div class="section-title">
              <h2>Products</h2>
              <p>Myinception offers a wide range of recruitment solutions that are configurable to your business needs. Our well trained and domain specific consultants will ensure that we deliver the high standards of service and value you would expect from your recruitment service provider.</p>
          </div>
          <div className='row'>
            <Crm/>
            <Hrms/>
            <Erp/> 
            <Android/>

          </div>
      </div>
    )
  }
  
