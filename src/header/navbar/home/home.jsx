import React from 'react'
import Services from './services/services'
import Aboutsec from './about-us-sec/about-us'
import Aboutlist from './about-list/about-list'
import Counts from './counts/counts'
import Aboutbtm from './about-btm/about-btm'
import Countsbtm from './countsbtm/countsbtm'
import News from './news/news'
import Contact from './contact/contact'
import Hero from './hero/hero'


export default function Home() {
  return (
    <div>
        <Hero/>    
        <Services/>
        <Aboutsec/>
        <Aboutlist/>
        <Counts/>
        <Aboutbtm/>
        <Countsbtm/>
        <News/>
        <Contact/>
    </div>
  )
}
