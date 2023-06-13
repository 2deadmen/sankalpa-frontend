import React from 'react'
import './pages/styles.css' ;
const Footer = () => {
  return (
    <div><section className='footer'>
     
    <div className='contactcol row'>
    <h3 align="center" className='headingcontact'><b>CONTACT US </b>  </h3>
   <hr />
      <div className="container addresslist">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>JSS Shri Manjunathehswara Institute of UG & PG Studies, 
                Vidyagiri, Dharwad.
              </p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p><a href="mailto:sankalpjss2023@gmail.com" style={{"text-decoration":"none","color":"white"}}>sankalpjss2023@gmail.com </a></p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p><a href="tel:9945755464" style={{"text-decoration":"none","color":"white"}}>9945755464</a> , <a href="tel:9845787707" style={{"text-decoration":"none","color":"white"}}>9845787707</a></p>
            </div>

          </div>  

        </div>
        <div className='map justify-content-center'>
   <iframe width="250" height="200" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=15.441198324746921~75.01940395541874&lvl=17.195619338788426&typ=d&sty=r&src=SHELL&FORM=MBEDV8" >
   </iframe>
   
</div>
        </div>
   <hr />
        <div className=" footer footer-content ">
        <p>&copy; 2023 . All rights reserved.</p>
        <p>Designed by <a href="https://github.com/2deadmen" style={{"text-decoration":"none","color":"white"}}>Kartik Hegde </a> & <a href="https://github.com/Haleshkshivashimpi" style={{"text-decoration":"none","color":"white"}}>Halesh k </a></p>
      </div>


</section></div>
  )
}

export default Footer