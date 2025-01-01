import React from 'react'
import './Body.css'
import profileimg from '../../assets/professionalpic.jpg'
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
const Body = () => {
  return (
    <div className='body-container'>
     <img src={profileimg} alt="" />
     <div className='body-info'>
        <h1>SARATHKUMAR S</h1>
        <p>Frontend Developer Using <span>REACT.JS</span></p>
        <div className='body-btn'>
        <button className='btn1'>GET IN TOUCH <IoIosArrowRoundUp /></button>
        <button className='btn2'>DOWNLOAD RESUME<MdOutlineFileDownload /> </button>
        </div>
        
     </div>
    </div>
  )
}

export default Body
