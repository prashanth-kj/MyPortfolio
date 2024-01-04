import { BrowserRouter } from "react-router-dom"
import AboutMe from "./components/AboutMe"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import MyNavbar from "./components/MyNavbar"
import Footer from "./components/Footer"

function App() {
 
  return (
    <>
     <BrowserRouter>
        <MyNavbar/>
        <Home/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
     </BrowserRouter>
        
     
 
    </>
  )
}

export default App
