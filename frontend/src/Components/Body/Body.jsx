import React from 'react'
import './Body.css'
import profileimg from '../../assets/pic4.jpg'
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
const handleDownload = () => {
  console.log("Resume Downloaded");
}
const Body = ({onGetInTouchClick}) => {
  return (
    <div className='body-container'>
     <img src={profileimg} alt="" />
     <div className='body-info'>
        <h1>SARATHKUMAR S</h1>
        <p>Frontend Developer Using <span>REACT.JS</span></p>
        <div className='body-btn'>
        <button className='btn1' > <a href="#" onClick={onGetInTouchClick}>GET IN TOUCH</a> <IoIosArrowRoundUp /></button>
        <button className='btn2' onClick={handleDownload}> <a href="/SARATHKUMAR S (Resume).pdf" download="Sarath_resume.pdf"> DOWNLOAD RESUME</a><MdOutlineFileDownload /> </button>
        </div>
        
     </div>
    </div>
  )
}

export default Body
