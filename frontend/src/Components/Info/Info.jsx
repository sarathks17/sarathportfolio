import React, { useState, useEffect } from "react";
import "./Info.css";
import { FaCode } from "react-icons/fa6";
import img1 from '../../assets/img1.jpg'
const App = () => {
  return (
    <div className="info-container">
      <h1>ABOUT </h1>
     <div className="about-info">
      <FaCode/>
      <h3>SOFTWARE DEVELOPER</h3>
      <p>I am a passionate Frontend Developer skilled in building responsive and dynamic web applications. With hands-on experience in React.js, JavaScript, and Node.js, I excel at creating user-friendly interfaces and ensuring seamless performance.</p>
      <h3>INTERNSHIP</h3>
      <p>I completed an 8-month internship in frontend development, where I developed and deployed multiple web applications. My expertise spans tools like Git, MongoDB, and modern design practices, focusing on crafting intuitive and accessible user experiences.</p>
      <button><a href="https://www.linkedin.com/in/sarathkumarsprofile/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
     </div>
    </div>
  )
};

export default App;
