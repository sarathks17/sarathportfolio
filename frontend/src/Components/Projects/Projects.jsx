import React from 'react'
import './Projects.css'
import card1 from '../../assets/about.png'
import card2 from '../../assets/football.jpg'
import fooddelimg from '../../assets/foodDeliveryimg.jpg'
const Projects = () => {
  return (
    <div className='project-container'>
       <h1>PROJECTS</h1>
        <div className="wrapper">
            <div className="card-area">
                <div className="card">
                    <img src={card2} alt="" />
                    <div className="overlay">
                        <h3>SOCCER WORLD</h3>
                        <p>A web application for a soccer academy with trainer profiles and booking features, built using React.js, Node.js, Express, and MongoDB for a seamless user experience.</p>
                        <a href="https://soccerworld-frontend.onrender.com/"target="_blank" rel="noopener noreferrer">Show Now</a>
                    </div>
                </div>
                <div className="card">
                    <img src={card1} alt="" />
                    <div className="overlay">
                        <h3>UNIVERSITY WEBAPP</h3>
                        <p>A responsive web application for university management, built using React.js, featuring sections for students, courses, and administrative functions to streamline operations.</p>
                        <a href="https://universityapplication-nmk0.onrender.com/"target="_blank" rel="noopener noreferrer">Show Now</a>
                    </div>
                </div>
                <div className="card">
                    <img src={fooddelimg} alt="" />
                    <div className="overlay">
                        <h3>img 1</h3>
                        <p>A food delivery app that lets users order food, make payments, and track deliveries effortlessly.</p>
                        <a href="https://food-delevery-application-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">Show Now</a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
