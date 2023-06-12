import React, { useEffect } from "react";
import './styles.css' ;
import { Link } from 'react-router-dom';
import logo  from './imagesankalp.png'
import treasure from './treasure.jpg'
import advert from './advert.jpg'
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import underline from './underline.png'
const Home = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });


}, []);
  // props.setloader(true)
  const countdownDate = new Date("2023-06-20T00:00:00").getTime();

    // Update the countdown timer every second
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Calculate the remaining time
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the remaining time
    try {
      document.getElementById("days").textContent = days.toString();
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

    } catch (error) {
      
    }
      // Identify and use the individual values as needed
  

      // Stop the countdown when the timer reaches zero
      if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
      }
    }, 1000);
  return (
    <div>


{/* logo section */} <section>
<div align="center" className='container my-5'><img src={logo}  height="250" className='sankalp-logo'  data-aos="zoom-in" style={{"max-height": "50%","width":"50vw"}} alt="SLogo" /> 
</div>

<div className="countdown container">
    <div className="countdown-timer container">
      <p className=' countdown-label waviy  fs-1'>
      <svg viewBox="0 0 1320 160">
	<text x="50%" y="50%" dy=".35em" text-anchor="middle">
		TIME REMAINING :
	</text>
</svg>
        
      </p>
      <div className="countdown-digits col  ">
        <span className="countdown-digit " id="days">00</span><b className='fs-4'> Days</b>
        <span className="countdown-digit " id="hours">00</span><b className='fs-4'> Hours</b>
        <span className="countdown-digit " id="minutes">00</span><b className='fs-4'> Minutes</b>
        <span className="countdown-digit " id="seconds">00</span><b className='fs-4'> Seconds</b>
      </div>
    </div>
  </div>

  </section>
<hr  className='container'/>


<section >
  <div className="container spotlight">
  
<div className= "containerpic">
    <div className= "card">
      <div className= "image">
        <img  src ="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className= "content">
        <h3>VASUKI VAIBHAV</h3>
    
      </div>
    </div>    
  </div>
  <div><h1 className="eveenthead" style={{"padding-top":"5vh"}}> <b>Harmonious Heights</b> </h1>
  <h2> <b>A Melodic Odyssey</b></h2>
  <p style={{"padding-top":"5vh","text-align":"center"}} className="fs-5">Mesmerizing melodies by Vasuki Vaibhav, <br />igniting the stage on Day 2!</p>
  
<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
 ♬  
  </div>
  <div class="snowflake">
  ♫
  </div>
  <div class="snowflake">
  ♪ 
  </div>
  <div class="snowflake">
  ♩
  </div>
  <div class="snowflake">
 ♬  
  </div>
  <div class="snowflake">
  ♫
  </div>
  <div class="snowflake">
  ♪ 
  </div>
  <div class="snowflake">
  ♩
  </div>
  <div class="snowflake">
 ♬  
  </div>
  <div class="snowflake">
  ♫
  </div>
  <div class="snowflake">
  ♪ 
  </div>
  <div class="snowflake">
  ♩
  </div>
</div>
  </div>
  </div>

</section>


  <section  className=''>
      <div className="events ">
        <div style={{"margin":"0% !important"}} className="container px-5  justify-content-center ">
          <div className="row" data-aos='slide-right'>
            <h1 className='fs-1 eveenthead' data-aos="fade-in" align="center"><b className='animate-charcter'>EVENTS</b></h1>
           <hr />
         
            <div className="box  firstrowevent">
            <div className="body">
                <div className="imgContainer">
                    <img className='' src={treasure} alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5"><HashLink style={{"text-decoration":"none","color":"white"}} smooth to='/events/#Treasure'>Treasure Hunt <i className="fa-solid fa-arrow-up-right-from-square"></i></HashLink> </h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
            

          
        <div className="box ">
            <div className="body">
                <div className="imgContainer">
                    <img src={advert} alt=""/>
                    
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                    <h3 className="text-white fs-5"><HashLink style={{"text-decoration":"none","color":"white"}} smooth to='/events/#advertisement'>Advertising <i className="fa-solid fa-arrow-up-right-from-square"></i></HashLink> </h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="box firstrowevent">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                    <h3 className="text-white fs-5"><HashLink style={{"text-decoration":"none","color":"white"}} smooth to='/events/#photography'>Photography and Video editing <i className="fa-solid fa-arrow-up-right-from-square"></i></HashLink> </h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
   
   

  

     <div className="box  ">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </div>  
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                    <h3 className="text-white fs-5"><HashLink style={{"text-decoration":"none","color":"white"}} smooth to='/events/#quiz'>Quiz <i className="fa-solid fa-arrow-up-right-from-square"></i></HashLink> </h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </section>


    <section id="gallery" className=''>
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-header container">
          <h3  align="center" className="section-title eveenthead"><b>MEMORIES</b></h3>
          <hr />
        </div>

        <div className="row g-0">

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-1.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-2.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-3.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo}alt=""/>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-4.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-5.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                <img src={logo} alt=""/>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>


<section>
  
</section>






  </div>











    // </div>
  )
}

export default Home