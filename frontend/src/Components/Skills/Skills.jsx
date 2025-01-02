import React from 'react'
import './Skills.css'
import { FaCode } from "react-icons/fa6";
const Skills = () => {
  return (
    <div className="skills-container">
     <h1>SKILLS </h1>
     <div className="skills-info">
      <FaCode/>
      <h3>FRONTEND DEVELOPMENT</h3>
      <ul>
        <li><span>Languages & Tools:</span> HTML, CSS, JavaScript, React.js, Redux</li>
        <li><span>UI/UX:</span>  Responsive Design, Accessibility, User Interface Optimization</li>
        <li><span>Design Techniques:</span>Cross-browser compatibility, Flexbox, CSS Grid</li>
      </ul>
      <h3>BACKEND DEVELOPMENT</h3>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
      <h3>DATABASE MANAGEMENT</h3>
      <ul>
        <li>MongoDB</li>
      </ul>
      <h3>OTHER SKILLS</h3>
      <ul>
        <li>REST API integration</li>
        <li>Debugging and troubleshooting</li>
        <li>Agile methodologies</li>
      </ul>
      
     </div>
    </div>
  )
}

export default Skills
