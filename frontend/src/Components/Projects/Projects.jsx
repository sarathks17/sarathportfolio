import React from 'react'
import './Projects.css'
import card1 from '../../assets/about.png'
import card2 from '../../assets/football.jpg'
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
                        <h3>UNIVERSITY WEBAPPLICATION</h3>
                        <p>A responsive web application for university management, built using React.js, featuring sections for students, courses, and administrative functions to streamline operations.</p>
                        <a href="https://universityapplication-nmk0.onrender.com/"target="_blank" rel="noopener noreferrer">Show Now</a>
                    </div>
                </div>
                <div className="card">
                    <img src={card1} alt="" />
                    <div className="overlay">
                        <h3>img 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis doloremque officiis ab sunt placeat fuga dolor animi dolores natus, debitis molestias recusandae reprehenderit eveniet laborum possimus cumque quos aut!</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">Show Now</a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Projects