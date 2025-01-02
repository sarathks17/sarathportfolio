import React from 'react'
import './Contact.css'
import { FaArrowLeftLong } from "react-icons/fa6";
const Contact = () => {
  return (
        <div className='contact-container'>
            <div className='contact-leftsection'>
                <h1>LET'S WORK TOGETHER</h1>
                
                <FaArrowLeftLong/>
                <div className='contact-txt'>
                    <p><span>Email:</span> sarathkumar93622@gmail.com</p>
                    <p><span>Phone:</span> 8891440098</p>
                    <div className='contact-btn'>
                    <button><a href="">LINKEDIN</a></button>
                    <button><a href="">GITHUB</a></button>
                    </div>
                    
                </div>
            </div>
            <div className='contact-rightsection'>
                <form>
                    <div className='scroll-section'>
                        <h1>LET'S TALK </h1>
                        <hr />
                    </div>
                    <div className='input-section'>
                    <label>Name
                      
                    </label>
                    <input type="text" required />
                    <label>Email
                       
                    </label>
                    <input type="email" required />
                    </div>
                    <div className='msg-section'>
                    <textarea></textarea>
                    <button>Submit</button>
                    </div>
                   
                </form>
            </div>
        </div>
  )
}

export default Contact
