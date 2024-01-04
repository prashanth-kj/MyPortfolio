import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaNodeJs ,FaGithub  } from 'react-icons/fa';
import { SiPostman, SiNetlify, SiRender,SiExpress } from 'react-icons/si';
import {  DiMongodb } from "react-icons/di";
function Skills() {
  return (
    <>
        <div className='container skillsdiv' id='skills'>
            <h1>Skills</h1>
        <div className="skills-section text-center">
            <div className='skilldiv'>
               <FaHtml5  className="skill-icon" title="HTML"/>
               <h6>HTML</h6>
            </div>
            <div  className='skilldiv'>
                <FaCss3  className="skill-icon" title="CSS" />
                <h6>CSS</h6>
            </div>
            <div className='skilldiv'> 
              <FaJs  className="skill-icon" title="JavaScript" /> 
              <h6>Javascript</h6>
            </div>
            <div className='skilldiv'> <FaBootstrap  className="skill-icon" title="Bootstrap" />
               <h6>Bootstrap</h6>
            </div>
            <div className='skilldiv'>
              <FaReact className="skill-icon"  title="React" />
              <h6>React</h6>
            </div>
            <div className='skilldiv'> 
              <FaNodeJs   className="skill-icon"title="Node.js" />
              <h6>NodeJS</h6>
            </div>
            <div className='skilldiv'>
               <SiExpress className="skill-icon" title="Express.js" />
               <h6>Express JS</h6>
            </div>
            <div className='skilldiv'>
               <DiMongodb  className="skill-icon" title="MongoDB"/> 
               <h6>MongoDb</h6>
            </div>
            <div className='skilldiv'>
              <FaGithub className="skill-icon" title="GitHub" /> 
              <h6>Github</h6>
            </div>
            <div className='skilldiv'>
              <SiPostman  className="skill-icon" title="Postman" /> 
              <h6>Postman</h6>
            </div>
            <div className='skilldiv'> 
              <SiNetlify  className="skill-icon" title="Netlify" /> 
              <h6>Netlify</h6>
            </div>
            <div className='skilldiv'>
              <SiRender  className="skill-icon" title="Render" /> 
              <h6>Render</h6>
            </div>
          
         
         
          
          
       
          
          
         
          
        </div>
        </div>
    
    </>
  )
}

export default Skills





// Inside your component

