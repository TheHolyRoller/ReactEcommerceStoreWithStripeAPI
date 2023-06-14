import {useState, useEffect, useReducer, useRef} from 'react'

import S from '../Styles/Signup.module.css'; 


import '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/free-regular-svg-icons'; 
import '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-svg-core'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { dataBase } from '../utilities/ChatComponent';
import { app } from '../utilities/ChatComponent'; 

  
  
  function Signup() {
    const [input, setInput] = useState(""); 

    const inputHandler = (e) => {

        setInput(e.target.value); 
        
      }

      const submitHandler =  async (e) => {
        e.preventDefault(); 
        if(input){
          await  addDoc(collection(dataBase,  "emails"), {
                email: input, 

            })
        }
        
      }
    
console.log(input);

  return (
    <div className={S.mainContainer} >
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
