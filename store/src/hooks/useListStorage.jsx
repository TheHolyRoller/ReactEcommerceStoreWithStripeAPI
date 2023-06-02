import { useState, useEffect } from 'react'; 



export default function useListStorage  (initVal, key) {

    let myValue; 
  
    const getValFromLS = () => {
        return localStorage.getItem(key)
          ? JSON.parse(localStorage.getItem(key))
          : initVal;
      };
    
      const [value, setValue] = useState(getValFromLS());
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value, key]);
      
      // Find out how to get this value into other files 
      console.log(value)
      console.log("this is the value whatever it may be");
      
        // myValue = value; 
      
      
      return [value, setValue];
    };