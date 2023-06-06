import React from 'react';
import './styles.css' ;
import logo  from './imagesankalp.png'
import nav from './topnav.jpg'
const Home = (props) => {
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
      document.getElementById("days").textContent = days.toString();
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

      // Identify and use the individual values as needed
      console.log("Days:", days);
      console.log("Hours:", hours);
      console.log("Minutes:", minutes);
      console.log("Seconds:", seconds);

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

<nav><img src={nav} width="100%" alt="Logo" />  
<nav className="navbar navbar-expand-lg  navbar-dark ">
 
  <div className="container-fluid ">
  
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end  " id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link  active mx-2" aria-current="page" href="#"><h4><b>HOME</b></h4></a>
        <a className="nav-link  mx-2 " href="#"><h5><b>EVENTS</b></h5></a>
        <a className="nav-link mx-2" href="#"><h5><b>BROCHURE</b></h5></a>
        <a className="nav-link mx-2" href="#"><h5><b>MEMORIES</b></h5></a>
        <a className="nav-link mx-2" href="#"><h5><b>ABOUT US</b></h5></a>
        
      </div>
    </div>
  </div>
</nav></nav>

{/* logo section */} <section>
<div align="center" className='container my-5'><img src={logo}  height="250" className='sankalp-logo'  data-aos="zoom-in" style={{"max-height": "50%","width":"50vw"}} alt="SLogo" /> 
</div>

<div className="countdown container">
    <div className="countdown-timer container">
      <p className='countdown-label fs-1'>Time Remaining:</p>
      <div className="countdown-digits col  ">
        <span className="countdown-digit " id="days">00</span><b className='fs-4'> Days</b>
        <span className="countdown-digit " id="hours">00</span><b className='fs-4'> Hours</b>
        <span className="countdown-digit " id="minutes">00</span><b className='fs-4'> Minutes</b>
        <span className="countdown-digit " id="seconds">00</span><b className='fs-4'> Seconds</b>
      </div>
    </div>
  </div>

  </section>

  <section>
      <div className="events">
        <div className="container  justify-content-center ">
          <div className="row">
            <h1 className='fs-1 eveenthead' data-aos="fade-in" align="center"><b >EVENTS</b></h1>
           <hr />
            <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Post Title</h3>
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
                        <h3 className="text-white fs-5">Post Title</h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
            
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Post Title</h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
   
   

  

     <div className="box secondrowevent">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Post Title</h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Post Title</h3>
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


<section className='footer'>
     
      <div className='contactcol row'>
      <h3 align="center" className='headingcontact'><b>CONTACT US </b>  </h3>
     <hr />
        <div className="container addresslist">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>
          <div className='map justify-content-center'>
     <iframe width="400" height="200" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=15.441198324746921~75.01940395541874&lvl=17.195619338788426&typ=d&sty=r&src=SHELL&FORM=MBEDV8" >
     </iframe>
     
</div>
          </div>
     
    


</section>


  </div>











    // </div>
  )
}

export default Home