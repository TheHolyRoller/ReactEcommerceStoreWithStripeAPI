import { useState, useEffect } from 'react'; 



export default function useLocalStorage (initVal, key) {
  const getValFromLS = () => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initVal;
  };

  const [value, setValue] = useState(getValFromLS());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  
  

  return [value, setValue];
};