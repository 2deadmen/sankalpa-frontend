import React from 'react'
import nav from './pages/topnav.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from "react-scroll-to-top";

const Navbar = () => {
  return (
    <div>
    <nav id='navbar'><img src={nav} className='navpic' width="100%" alt="Logo" />  
    <nav className="navbar navbar-expand-lg  navbar-dark ">
     
      <div className="container-fluid ">
    <b>  <ScrollToTop smooth  color='#be0d89'/></b>
     
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end  " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link className="nav-link  active mx-2" aria-current="page" to='/'><h4><b>HOME</b></h4></Link>
            <Link className="nav-link  mx-2 " to='/events'><h5><b>EVENTS</b></h5></Link>
            <a className="nav-link mx-2" href='https://drive.google.com/file/d/1MwCCtLVxiu_4XHuocSlbN5uLkyPTIxwc/view?usp=drivesdk'><h5><b>BROCHURE</b></h5></a>
            <HashLink className="nav-link mx-2" smooth to='/#gallery'><h5><b>MEMORIES</b></h5></HashLink>
           
            <Link className="nav-link  mx-2 " to='/about'><h5><b>ABOUT</b></h5></Link>
          </div>
        </div>
      </div>
    </nav></nav>
    </div>
  )
}

export default Navbar