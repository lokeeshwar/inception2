import './App.css';
import Header from './header/header';
import Topbar from './topbar/topbar';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './header/navbar/home/home';
import About from './header/navbar/about/about';
import Product from './header/navbar/product/product';
import Servicess from './header/navbar/services/services';
import JobSeekers from './header/navbar/job-seekers/jobSeekers';
import Contactus from './header/navbar/contact-us/contactus';



function App() {
  return (
    <div className="App">
      <Topbar/>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Servicess />}></Route>
      <Route path="/products" element={<Product />}></Route>
      <Route path="/jobSeekers" element={<JobSeekers />}></Route>
      <Route path='/contact' element={<Contactus/>}></Route> 
      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
