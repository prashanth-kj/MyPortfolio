import React from 'react'
import ProjectTile from './ProjectTile';
import TravelImage from '../images/Travel Landing Page.png';
import RestaurentImage from '../images/Restaurent Landing page.png';
import DiceGame from '../images/Dice Game.png';
import NotesApp from '../images/Notes App.png';
import PasswordReset from '../images/passwordreset3.png';
import FitnessLogger from '../images/fitnessLogger1.png';
import { Row } from 'react-bootstrap';

function Projects() {
  return (
    <>
      <div className='container mt-3 projectdiv' id='projects'>
          <h1>Projects</h1>
          
            <div className='projectcard'>

            <Row sm={1} md={2} lg={3} >

              <ProjectTile 
                img={FitnessLogger}
                title="Fitness Logger App"
                description="Built a fitness logger app with React.js, Node.js, MongoDB, and token authentication for secure user interactions, enabling seamless tracking of fitness activities with a focus on data security."
                view="https://boisterous-pasca-363de0.netlify.app"
                code="https://github.com/prashanth-kj/notesApp-Redux"
              />
              <ProjectTile 
                img={PasswordReset}
                title="Password Reset App"
                description=" Developed a secure password reset web app using Node.js and React.js, implementing token-based authentication, MongoDB for data storage, and ensuring a seamless user experience."
                view="https://wonderful-selkie-2ab1a7.netlify.app"
                code="https://github.com/prashanth-kj/password-reset-fe"
              />

              <ProjectTile 
                img={NotesApp}
                title="Notes App"
                description=" Created a React web app with Redux for easy note creation, editing, deletion, and organization within a responsive user interface.  "
                view="https://aesthetic-pothos-094180.netlify.app"
                code="https://github.com/prashanth-kj/notesApp-Redux"
              /> 
              
              <ProjectTile 
                img={DiceGame}
                title="DiceGame"
                description="Built an interactive dice game with HTML, CSS, and JavaScript (DOM) for a fun and engaging user experience."
                view="https://incandescent-nasturtium-d48f1d.netlify.app"
                code="https://github.com/prashanth-kj/Dice_Game"
              /> 

              <ProjectTile 
                img={RestaurentImage}
                title="Restaurent Landing Page"
                description="Designed and developed a restaurant landing page using HTML, CSS, and Bootstrap to create an appealing and responsive web interface."
                view="https://imaginative-seahorse-506326.netlify.app"
                code="https://github.com/prashanth-kj/Restaurent_Landing_Page"
              />

              <ProjectTile 
                img={TravelImage}
                title="Travel Landing Page"
                description="Created a travel landing page from a Figma design using HTML and CSS, focusing on achieving pixel-perfect design accuracy."
                view="https://marvelous-eclair-28d2be.netlify.app"
                code="https://github.com/prashanth-kj/Travel_Landing_Page"
              />

              </Row>
            </div>
      
          
      </div>
    </>
  )
}

export default Projects