import React from 'react'
import './header.css'
import Logo from './logo/logo'
import Navbar from './navbar/nav'
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import About from './navbar/about/about';
// import Home from './navbar/home/home';


export default function Header() {
  return (
    <div id='header'>
      <Logo/>

          <Navbar/>

    </div>
  )
}


// {/* <BrowserRouter>
// <Navbar/>
// <Routes>
//   <Route exact path="/Home" element={<Home />}></Route>
//   <Route path="/about" element={<About />}></Route>
//   {/* <Route path="/services" element={<Services />}></Route>
//   <Route path="/products" element={<Product />}></Route>
//   <Route path="/jobSeekers" element={<JobSeekers />}></Route> */}
//   {/* <Route path='contactUs' element={<ContactUs/>}></Route> */}
// </Routes>
// </BrowserRouter> */}