import React ,{useEffect}from 'react'
import org from './org.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    
    
    }, []);
  return (
    <div  className='container'>
        <section className=''>
    <h2 className='eveenthead m-5 '><b>Sankalp Event Management</b></h2>
   <div className='event'>  <p>Welcome to Sankalp Event Management! We are an esteemed organization that has been hosting exceptional events since our inception in February 2009. Sankalp began as a one-day District Level IT Fest and has since grown and flourished, captivating participants and spectators year after year. Our unwavering commitment to excellence has led us to organize successful editions in 2010, 2011, 2013, 2015, 2017, 2018, and 2019.</p>

<p>Sankalp has become a melting pot of talent, attracting teams from various parts of Karnataka state. We take immense pride in witnessing these teams participate and achieve remarkable success, with many emerging victorious and bringing home different prizes. It is a testament to their hard work, dedication, and the platform that Sankalp provides to showcase their skills.</p>

 <img src={org}  className='aboutimg my-5 event-image shadow-lg ' alt="" />

<p>To recognize and celebrate the outstanding achievements of our participants, Sankalp presents the General Champions and Runners-up with well-deserved accolades and cash prizes. These rewards not only serve as a token of appreciation but also as a motivation for participants to continue their pursuit of excellence in their respective fields.</p>

<p>At Sankalp, our mission is to explore and nurture talent. We firmly believe in the power of co-curricular and extra-curricular activities in shaping the overall personality of individuals. Through our events, we aim to conduct, organize, and manage a diverse range of activities that provide graduates with opportunities to enhance their skills, gain valuable experiences, and develop holistically.</p>

<p>We are thrilled to announce the unveiling of SANKALP-2023, a Two Days State Level Fest designed to uncover hidden talents across Karnataka state. Taking place on June 20th and 21st, 2023, at JSS SMI UG & PG Studies in VIDYAGIRI, Dharwad, this grand event promises to be an unforgettable experience for all participants.</p>
</div>
   
   </section>
    </div>
  )
}

export default About