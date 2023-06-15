import React ,{useEffect}from 'react'
import './styles.css' ;
import './events.css'
import treasure from './treasure.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import advert from './advert.jpg'
import photo from './photography.jpg'
import cultural from './cultural.jpg'
import quiz from './quiz.jpg'

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });


}, []);
  return (
    <div className='container'>
      <div className='main '>
        <section id="home">
        <h1 className='fs-1 eveenthead' data-aos="fade-in" align="center"><b className='animate-charcter'>EVENTS</b></h1>
          <p className='fs-3' align='center'><b>Join us for an exciting lineup of events!</b></p>
        </section>
    <hr />
        <section id="Treasure">
          <h2 className='eveenthead'><b>Treasure Hunt</b></h2>
          <div className="event">
            <img src={treasure} alt="Cultural Treasure Hunt" className="event-image"/>
            <p data-aos='fade-up'>
              <h3>ANVESHANAM</h3>
              <h4>Instructions</h4>
              <ul>
                <li>Number of participants: 02.</li>
                <li>Instructions will be given by the organizing team.</li>
                <li>There will be four rounds.</li>
                <li>All the puzzles of the game will point towards the venue.</li>
                <li>Teams will be eliminated based on the time taken to complete their respective tasks.</li>
                <li>The participants will be assigned a pre-assignment and overnight assignment.</li>
                <li>One extra pair of dress is necessary; all the events will be conducted on the ground (Track pants & T-Shirt are optional).</li>
                <li>Bring craft materials (Glue, Cutter, Colour Pen, Scissors) for the overnight assignment.</li>
                </ul>  <h4>Student Co-ordinators</h4>
            
            <ul>
                <li>Mr. Sindhoor Hegde. M: <a href="tel:9483025205">9483025205</a>
                </li>
                <li>Ms. Rekha Kadam. M: <a href="tel:8147192609">8147192609</a></li>
              </ul>
          
            <h4>Event Co-ordinators</h4>
          
              <ul>
                <li>Smt. Preeti Gujnal M: <a href="tel:9448003335">9448003335</a></li>
                <li>Smt. Venus Mishra  M: <a href="tel:9686319889">9686319889</a></li>
              </ul>
              
            </p>
            <p>
              {/* <button id="register-btn" onclick="registerForTreasureHunt()">Register Now</button> */}
            </p>
          </div>
        </section>
    
        <section id="advertisement">
          <h2 className='eveenthead'><b>Advertisement</b></h2>
          <div className="event">
            <img src={advert} alt="Advertisement"  className=" container event-image"/>
            <p data-aos='fade-up'>
              <h4>Instructions</h4>
              <ul>
                <li>Number of participants: 02.</li>
                <li>Participants need to get their own materials. (Sketch Pens, Colour Pencils, Pencils, Erasers, Colour Pens).</li>
                <li>Indiscipline, indecent presentation, objectionable words or sentences will not be entertained and will be disqualified.</li>
              </ul>
            <h4>Student Co-ordinators</h4>
            <ul>
                <li>Mr. Harsha Hiregoudar. M: <a href="tel:8861322818">8861322818</a></li>
                <li>Ms. Shreeja M. M: <a href="tel:8147188203">8147188203</a></li>
              </ul>
          
            <h4>Event Co-ordinators</h4>
          
              <ul>
                <li>Shri. Avinash Holihosur M: <a href="tel:7899155423">7899155423</a></li>
                <li>Shri. Vinayak Ingalagi M: <a href="tel:9964897105">9964897105</a></li>
              </ul>
            </p>
          </div>
        </section>
    
        <section id="photography">

          <h2 className='eveenthead'><b>Photography & Videography</b></h2>
          <div className="event">
            <img src={photo} alt="Photography" className="event-image"/>
           <p data-aos='fade-up'>
            <h3>CHITRA VYUH</h3>
           <h4>Instructions</h4>
              <ul>
                <li>Number of participants: 02.</li>
                <li>One Participant should take 3 photos in JSS campus and another participant should edit it using photoshop and make it one picture.</li>
                <li>Participants will have 5 minutes to finish.</li>
                <li>Capturing through "MOBILE" only. No other gadgets allowed throughout the event.</li>
                <li>Capturing outside the campus is prohibitted.</li>
                <li>The photo should be of nature/buildings/idols without any person in it.</li>
                <li>One participant should record video of at least five minutes from campus and another participant should edit it using VITA Mobile editor and output video should be of one minute.</li>
                <li>Participants will be given ten minutes to finish the video editing.</li>
              </ul>
            
            <h4>Student Co-ordinators</h4>
            
              <ul>
                <li>Mr. Megharaj SN M: <a href="tel:7892748464">7892748464</a></li>
                <li>Miss. Pragati Shetty M: <a href="tel:8277583779">8277583779</a></li>
              </ul>
            
            <h4>Event Co-ordinators</h4>
            
              <ul>
                <li>Dr. Shashikant M: <a href="tel:9742350436">9742350436</a></li>
                <li>Shri. Prashant Medkinal M: <a href="tel:7406560114">7406560114</a></li>
              </ul>
              </p> 
          </div>
        </section>
    
        <section id="quiz">
           <h2 className='eveenthead'><b>Quiz</b></h2>
          <div className="event">
            <img src={quiz} style={{"object-position":"center bottom"}}  alt="Quiz" className="event-image"/>
            <p data-aos='fade-up'>
            <h4>Instructions</h4>
              <ul>
                <li>Number of participants: 02.</li>
                <li>There will be 6 rounds including Elimination.</li>
                <li>Question will be based on General Awareness, Current Affairs, IT Based, Social Science, Politics, Sports, and Cultural aspects.</li>
                <li>Judges' decision will be final.</li>
                <li>Rules will be intimated on the event day.</li>
                <li>All round scores will be considered for final results.</li>
                <li>Mobile phone and other electronic gadgets are strictly prohibited.</li>
              </ul>
         
            <h4>Student Co-ordinators</h4>
        
              <ul>
                <li>Miss. Ruchita Rokade M: <a href="tel:8310231694">8310231694</a></li>
                <li>Mr. Durgesh Prabhu M: <a href="tel:9902010831">9902010831</a></li>
              </ul>
          
            <h4>Event Co-ordinators</h4>
        
              <ul>
                <li>Dr. Ronil Manohar M: <a href="tel:9845787707">9845787707</a></li>
                <li>Smt. Rajani Talikoti M: <a href="tel:9480776761">9480776761</a></li>
              </ul>
               </p>
          </div>
        </section>
    
     
        <section id="cultural">
        <h2 className='eveenthead'><b>Cultural </b></h2>
          <div className="event">
            <img src={cultural} alt="Cultural" className="event-image"/>
            <p data-aos='fade-up'>
            <h4>Instructions</h4>
              <ul>
                <li>Time limit: 6+1 Min.</li>
                <li>Number of Students: 08 to 12.</li>
                <li>Theme of the dance: semi-classical, folk, films & contemporary.</li>
                <li>CD's & Pendrive should be submitted at the time of registration (MP3 format).</li>
                <li>Props & costumes will not be provided by the organizers.</li>
                <li>Throwing of flowers, colors, and spraying of foam is prohibited.</li>
                <li>Separate special prizes will be awarded and also considered for General Championship.</li>
              </ul>
          
            <h4>Student Co-ordinators</h4>

              <ul>
                <li>Miss. Varsha DM: <a href="tel:8073004476">8073004476</a></li>
                <li>Miss. Mahalakshmi M: <a href="tel:8197950726">8197950726</a></li>
              </ul>
       
            <h4>Event Co-ordinators</h4>
            
              <ul>
                <li>Smt. Vibha S. Mugali M: <a href="tel:9448548033">9448548033</a></li>
                <li>Shri. Anand V. Korawar M: <a href="tel:9880691257">9880691257</a></li>
              </ul>
            </p>
          </div>
        </section>
      </div>

    

    
    </div>
  )
}

export default Events