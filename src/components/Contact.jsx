
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone ,FaArrowUp } from 'react-icons/fa';
import contactimage from '../images/contact1.png'
function Contact() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='container contactdiv'>
      <h1 className='text-center'>Get In Touch</h1>
      <div className='contact'>
         <div className='contact-left '>
             <img src={contactimage} alt="contactimage" className='img-fluid ' />
         </div>
         <div className='contact-right'>
         <ul>
          <li>
            <a href="https://www.linkedin.com/in/prasanth-kj" target="_blank" rel="noopener noreferrer" className='social-link'>
              <FaLinkedin size={45} className="me-2" /> 
              {'https://www.linkedin.com/in/prasanth-kj'}
            </a>
          </li>
          <li>
            <a href="https://github.com/prashanth-kj" target="_blank" rel="noopener noreferrer" className='social-link'>
              <FaGithub size={45} className="me-2" />
              {'https://github.com/prashanth-kj'}
            </a>
          </li>
          <li>
            <a href="mailto:kjprasanth98@gmail.com" target="_blank" rel="noopener noreferrer" className='social-link'>
              <FaEnvelope size={45} className="me-2" />
              {'kjprasanth98@gmail.com'}
            </a>
          </li>
          <li>
            <a href="tel:+918940213051" className='social-link'>
              <FaPhone size={45} className="me-2" />
              {'8940213051'}
            </a>
          </li>
        </ul>
         </div>

         <div className='arrowfunction' style={{ position: 'fixed', bottom: '70px', right: '20px', cursor: 'pointer' ,color:"#005f91" }} onClick={scrollToTop}>
             <FaArrowUp size={30} />
         </div>
      </div>
    </div>
  );
}

export default Contact;


