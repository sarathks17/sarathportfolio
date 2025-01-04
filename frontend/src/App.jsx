import React, {useRef} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Info from './Components/Info/Info'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

const contactRef = useRef(null);
const navbarRef = useRef(null);

const handleScrollToContact = () => {
  if(contactRef.current){
    contactRef.current.scrollIntoView({behavior:"smooth"})
  }
};
const handleScrollToNavbar = () => {
  if(contactRef.current){
    contactRef.current.scrollIntoView({behavior:"smooth"})
  }
};



  return (
    <div>
      <div ref={navbarRef}>
      <Navbar  onGetInTouchClick={handleScrollToContact}  onNameClick={handleScrollToNavbar} />
      </div>
     <Body onGetInTouchClick={handleScrollToContact} />
     <Info/>
    <Skills/>
    <Projects/>
    <div ref={contactRef}>
    <Contact/>
    </div>
  
   <Footer/> 
     
     
    </div>
  )
}

export default App
