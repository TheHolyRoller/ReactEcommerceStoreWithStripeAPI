

import React, { useRef, useState, useEffect, useCallback, useContext, useReducer} from "react";

// import Captcha, { ReCAPTCHA } from 'react-google-recaptcha'; 


// import '../Styles/Form.css'; 

// This is clashing with the styles 
// import '../pages/Styles/Form.css'; 

// Import the CSS style module here 



const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const [recaptchaToken, setRecaptchaToken] = useState()
  
  
  const formID = "g6Grws8t"; 
  
  const recaptchaKey = "6Ldqg0klAAAAAEtnIhw2r7GGeK4If9_pUnq75tb4"; 
  
  
  const recaptchaRef = useRef(); 
  
  
  const formSparkURL = `https://submit-form.com/${formID}`;
  
  const updateRecaptchaToken = (token) => {
            
        setRecaptchaToken(token); 
    
  }
  
  
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch(formSparkURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });
    alert("Form submitted");
    setSubmitted(true); 
    
  };




  return (
    //  action="https://submit-form.com/your-form-id"
    
    // Modify the classes for CSS modules here 
    <div className="mainContainer">
    
    {/* Add in the headline container here  */}
    <div className="headlineContainer">
      
    <div className="contactHeadline">
    
    We'd Love to Hear from You! 
      
    </div>
      
      
    </div>
    
    <form className="form" action=" https://submit-form.com/your-form-id" method="POST"   onSubmit={onSubmit}>
        
    {submitted ? <div className="submittedMessage">Thanks for reaching out! </div> : <div></div>}
      <div className="form-group">
        {/* <label className="label"  htmlFor="name">Name</label> */}
        <input className="input"
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
      </div>
      <div className="form-group">
        {/* <label className="label"  htmlFor="email">Email</label> */}
        <input
            className="input"
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </div>
      <div className="form-group">
        {/* <label htmlFor="phone">Phone number</label> */}
        <input
        className="input"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          placeholder="telephone"
          onChange={(e) => setPhone(e.target.value)}
          required
          />
      </div>
      <div className="form-group">
        {/* <label htmlFor="message">Message</label> */}
        <textarea 
        className="message"
          id="message"
          name="message"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          />
      </div>
      <button className="submitButton"  type="submit">Submit</button>
      {/* <ReCAPTCHA class="g-recaptcha" ref={recaptchaRef} data-sitekey={recaptchaKey} onChange={updateRecaptchaToken} /> */}
      
    </form>
    
          </div>
  );
};

export default Form;