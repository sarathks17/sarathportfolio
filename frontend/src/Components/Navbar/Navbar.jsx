import React, { useNavigate }  from 'react'
import './Navbar.css'
import { IoIosArrowRoundUp } from "react-icons/io";
const Navbar = ({onGetInTouchClick, onNameClick}) => {

 
  return (
    <div className='nav-container'>
        <div className='left-nav'>
            <h2><a href="#" onClick={onNameClick}>SARATHKUMAR S</a></h2>
            <button onClick={onGetInTouchClick}>GET IN TOUCH <IoIosArrowRoundUp /></button>
        </div>
        <div className='right-nav'>
            <h1> <a href="#" onClick={onNameClick}>HOME</a></h1>
        </div>
     
    </div>
  )
}

export default Navbar
