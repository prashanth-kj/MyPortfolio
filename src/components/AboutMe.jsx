import React from 'react'
import aboutme from '../images/abutme2.png'
function AboutMe() {
  return (
   <>
     
     <div className='container mt-4 aboutmediv' id='aboutme'>
           <h1>Aboutme</h1>
           <div className='row aboutme' style={{ textAlign: "justify" }}>

              <div className='col-md-5 aboutme-left'>
                   <img src={aboutme} alt="education" className='img-fluid bg-transparent' />
              </div>
              <div className='col-md-7 aboutme-right'>
                  
              <p>✍🏻 &nbsp; Hello! I'm an aspiring MERN Stack Developer passionate about crafting web applications. Eager to learn and contribute, my focus is on technologies like React, Node.js, and MongoDB. I stay updated with the latest trends, bringing a fresh perspective to my work.</p>
              <p>✍🏻 &nbsp; Driven by a love for problem-solving and fueled by creativity, I create clean, user-friendly interfaces. Let's connect and chat about coding, projects, or anything tech-related!</p>              </div>

          </div>
     </div>
 

   </>
  )
}

export default AboutMe