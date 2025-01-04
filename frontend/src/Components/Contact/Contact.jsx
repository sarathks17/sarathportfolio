import React from 'react'
import './Contact.css'
import { FaArrowLeftLong } from "react-icons/fa6";
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "151efa5e-2747-4bd2-a3c6-240d8f73452b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
        <div className='contact-container'>
            <div className='contact-leftsection'>
                <h1>LET'S WORK TOGETHER</h1>
                
                <FaArrowLeftLong/>
                <div className='contact-txt'>
                    <p><span>Email:</span> sarathkumar93622@gmail.com</p>
                    <p><span>Phone:</span> 8891440098</p>
                    <div className='contact-btn'>
                    <button><a href="https://www.linkedin.com/in/sarathkumarsprofile/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></button>
                    <button><a href="https://github.com/sarathks17" target="_blank" rel="noopener noreferrer">GITHUB</a></button>
                    </div>
                    
                </div>
            </div>
            <div className='contact-rightsection'>
                <form onSubmit={onSubmit}>
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
                    <textarea name='message' placeholder='Enter Your Message'></textarea>
                    <button>Submit</button>
                    </div> 
                </form>
                <span>{result}</span>
            </div>
           
        </div>
  )
}

export default Contact
