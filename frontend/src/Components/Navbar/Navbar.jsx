import React from 'react'
import './Navbar.css'
import { IoIosArrowRoundUp } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='left-nav'>
            <h2>SARATHKUMAR S</h2>
            <button>GET IN TOUCH <IoIosArrowRoundUp /></button>
        </div>
        <div className='right-nav'>
            <h1>HOME</h1>
        </div>
     
    </div>
  )
}

export default Navbar
