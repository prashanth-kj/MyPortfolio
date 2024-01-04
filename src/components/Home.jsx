import React from 'react'
import Typewriter from 'typewriter-effect';
import working from '../images/work.png';
import Button from 'react-bootstrap/Button';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


function Home() {
  return (
    <>
        <div className='container homediv' id='home'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='home-left '> 
                <h1>Hello 👋 I am <br />Prashanth K J</h1>
                <br />
                <h1>
                  <Typewriter
                    options={{
                      strings:["MERN Stack Developer", "Web Developer"],
                      autoStart:true,
                      loop:true
                    }}
                  >
                  </Typewriter>
                </h1>
                
                  <div className='d-flex justify-content-evenly mt-5 me-5' >
                      <a href="https://www.linkedin.com/in/prasanth-kj" target="_blank" className='social-link'>
                        <FaLinkedin size={45} className="me-3" />
                      </a>

                      <a href="https://github.com/prashanth-kj" target="_blank" className='social-link'>
                        <FaGithub size={45} className="me-3"/>
                      </a>

                      <a href="mailto:kjprasanth98@gmail.com" target="_blank" className='social-link'>
                          <FaEnvelope size={45} />
                      </a>
                  </div>

                  <div className='mt-5 mb-5' >
                      <a href="https://drive.google.com/file/d/1QN_S4g3AAIL3Msr1I-oZXGqfzeCLlmyb/view?usp=sharing"  target="_blank" >
                         <Button className='btn btn-secondary download-link'>Download Resume</Button>
                      </a>

                  </div>


              </div>
            </div>
            <div className='col-md-6'>
              <div className='home-right'>
                <img src={working} alt="workingman" className='me-5 img-fluid workingman' />
              </div>
            </div>
          </div>
        </div>


       
    
    
    </>
  )
}

export default Home