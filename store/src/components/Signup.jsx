import {useState} from 'react'

// Import the style sheet here 
// import S from '../Styles/Signup.module.css'; 

// import S from '../pages/Styles/Signup.module.css'; 



import S from '../Styles/Signup.module.css'; 


// Add in the Config 
import '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/free-regular-svg-icons'; 
import '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-svg-core'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

  
  const firebaseConfig = {
    apiKey: "AIzaSyCsa-9Su2FChNIKLLqk-ggbv-TmOZAa3fY",
    authDomain: "emailsignup-fc167.firebaseapp.com",
    projectId: "emailsignup-fc167",
    storageBucket: "emailsignup-fc167.appspot.com",
    messagingSenderId: "219351075747",
    appId: "1:219351075747:web:9ee3c66273704af2512816",
    measurementId: "G-B8KFT8DXME"
  };
  
  
  const app = initializeApp(firebaseConfig); 
  const db = getFirestore(app); 
  
  
//   Add in the submit handler functions here 
  
 
  
  
  function Signup() {
    const [input, setInput] = useState(""); 
    
    
    const inputHandler = (e) => {

        setInput(e.target.value); 
        
        
      }
      
      
      const submitHandler =  async (e) => {
        e.preventDefault(); 
        if(input){
          await  addDoc(collection(db, "emails"), {
                email: input, 
                
            })
        }
        
      }
    
console.log(input);


  return (
    <div className={S.mainContainer} >
      
    {/* Add in the form container here  */}
    <div className={S.formContainer}>
    
    <form onSubmit={submitHandler} className={S.form}>
    
    <div className={S.inputContainer}>
        
  <div className={S.SVGContainer}>


  <FontAwesomeIcon icon={faEnvelope} />

  </div>
    <input className={S.newsletterInput}  type='text' placeholder='Email'   onChange={inputHandler} value={input}></input>
    
    
    </div>
    

    </form>
        
        
        
    </div>
      
    </div>
  );
  
}

export default Signup
