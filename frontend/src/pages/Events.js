import React from 'react'
import './styles.css' ;
import './events.css'

const Events = () => {
  return (
    <div>
      <div className='main'>
        <section id="home">
          <h1>Events</h1>
          <p>Join us for an exciting lineup of events!</p>
        </section>
    
        <section id="treasure-hunt">
          <h2>Treasure Hunt</h2>
          <div className="event">
            <img src="images/treasure_hunt.jpg" alt="Cultural Treasure Hunt" className="event-image"/>
            <p>
              <ul>
                <li>Number of participants: 02.</li>
                <li>Instructions will be given by the organizing team.</li>
                <li>There will be four rounds.</li>
                <li>All the puzzles of the game will point towards the venue.</li>
                <li>Teams will be eliminated based on the time taken to complete their respective tasks.</li>
                <li>The participants will be assigned a pre-assignment and overnight assignment.</li>
                <li>One extra pair of dress is necessary; all the events will be conducted on the ground (Track pants & T-Shirt are optional).</li>
                <li>Bring craft materials (Glue, Cutter, Colour Pen, Scissors) for the overnight assignment.</li>
              </ul>
            </p>
            <p>
              {/* <button id="register-btn" onclick="registerForTreasureHunt()">Register Now</button> */}
            </p>
          </div>
        </section>
    
        <section id="advertisement">
          <h2>Advertisement</h2>
          <div className="event">
            <img src="images/advertisement.jpg" alt="Advertisement" className="event-image"/>
            <p>
              <ul>
                <li>Number of participants: 02.</li>
                <li>Participants need to get their own materials. (Sketch Pens, Colour Pencils, Pencils, Erasers, Colour Pens).</li>
                <li>Indiscipline, indecent presentation, objectionable words or sentences will not be entertained and will be disqualified.</li>
            
            <h4>Student Co-ordinators</h4>
                <li>Mr. Harsha Hiregoudar. M: 8861322818</li>
                <li>Ms. Shreeja M. M: 8147188203</li>
              </ul>
          
            <h4>Event Co-ordinators</h4>
          
              <ul>
                <li>Shri. Avinash Holihosur M: 7899155423</li>
                <li>Shri. Vinayak Ingalagi M: 9964897105</li>
              </ul>
            </p>
          </div>
        </section>
    
        <section id="photography">
          <h2>Photography</h2>
          <div className="event">
            <img src="images/5.jpg" alt="Photography" className="event-image"/>
            <p>
              <ul>
                <li>Number of participants: 02.</li>
                <li>One Participant should take 3 photos in JSS campus and another participant should edit it using photoshop and make it one picture.</li>
                <li>Participants will have 5 minutes to finish.</li>
                <li>The photo should be of nature/buildings/idols without any person in it.</li>
                <li>One participant should record video of at least five minutes from campus and another participant should edit it using VITA Mobile editor and output video should be of one minute.</li>
                <li>Participants will be given ten minutes to finish the video editing.</li>
              </ul>
            </p>
            <h3>Student Co-ordinators</h3>
            <p>
              <ul>
                <li>Mr. Megharaj SN M: 7892748464</li>
                <li>Miss. Pragati Shetty M: 8277583779</li>
              </ul>
            </p>
            <h3>Event Co-ordinators</h3>
            <p>
              <ul>
                <li>Dr. Shashikant M: 9742350436</li>
                <li>Shri. Prashant Medkinal M: 7406560114</li>
              </ul>
            </p>
          </div>
        </section>
    
        <section id="quiz">
          <h2>Quiz</h2>
          <div className="event">
            <img src="images/4.jpg" alt="Quiz" className="event-image"/>
            <p>
              <ul>
                <li>Number of participants: 02.</li>
                <li>There will be 6 rounds including Elimination.</li>
                <li>Question will be based on General Awareness, Current Affairs, IT Based, Social Science, Politics, Sports, and Cultural aspects.</li>
                <li>Judges' decision will be final.</li>
                <li>Rules will be intimated on the event day.</li>
                <li>All round scores will be considered for final results.</li>
                <li>Mobile phone and other electronic gadgets are strictly prohibited.</li>
              </ul>
            </p>
            <h3>Student Co-ordinators</h3>
            <p>
              <ul>
                <li>Miss. Ruchita Rokade M: 8310231694</li>
                <li>Mr. Durgesh Prabhu M: 9902010831</li>
              </ul>
            </p>
            <h3>Event Co-ordinators</h3>
            <p>
              <ul>
                <li>Dr. Ronil Manohar M: 9845787707</li>
                <li>Smt. Rajani Talikoti M: 9480776761</li>
              </ul>
            </p>
          </div>
        </section>
    
     
        <section id="cultural">
          <h2>Cultural</h2>
          <div className="event">
            <img src="images/treasure_hunt.jpg" alt="Cultural" className="event-image"/>
            <p>
              <ul>
                <li>Time limit: 6+1 Min.</li>
                <li>Number of Students: 08 to 12.</li>
                <li>Theme of the dance: semi-classical, folk, films & contemporary.</li>
                <li>CD's & Pendrive should be submitted at the time of registration (MP3 format).</li>
                <li>Props & costumes will not be provided by the organizers.</li>
                <li>Throwing of flowers, colors, and spraying of foam is prohibited.</li>
                <li>Separate special prizes will be awarded and also considered for General Championship.</li>
              </ul>
            </p>
            <h3>Student Co-ordinators</h3>
            <p>
              <ul>
                <li>Miss. Varsha DM: 8073004476</li>
                <li>Miss. Mahalakshmi M: 8197950726</li>
              </ul>
            </p>
            <h3>Event Co-ordinators</h3>
            <p>
              <ul>
                <li>Smt. Vibha S. Mugali M: 9448548033</li>
                <li>Shri. Anand V. Korawar M: 9880691257</li>
              </ul>
            </p>
          </div>
        </section>
      </div>

    

    
    </div>
  )
}

export default Events