import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll';
function MyNavbar() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
  return (
        <Navbar expand="lg" className='col-md-12 navbarcolor'>
        <Container>
            <Navbar.Brand href="#home" onClick={scrollToTop}><i>Portfolio</i></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ms-auto text-center mynavbar">
                    <Link to="home" smooth={true} duration={500} offset={-70}>
                        Home
                    </Link>
                    <Link to="aboutme" smooth={true} duration={500} offset={-70}>
                        AboutMe
                    </Link>
                    <Link to="skills" smooth={true} duration={500} offset={-70}>
                        Skills
                    </Link>
                    <Link to="projects" smooth={true} duration={500} offset={-70}>
                        Projects
                    </Link>
                    <Link to="contact" smooth={true} duration={500} offset={-70}>
                        Contact
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

      
  )
}

export default MyNavbar