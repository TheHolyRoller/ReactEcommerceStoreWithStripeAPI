    
    /** 
    
    Okay so the plan now is to get the data that has been saved and retreived using 
    the useLocal Storage hook. 
    
    Then once we have the data we need to add it into an Array. 
    
    
    Then once it's in an array we need to map it out and each item in the 
    
    Array should be a DOM element. 
    
    Then I can add styling effects, animations and some flair later on. 
    
    
    Okay so you can log some details about the item to the console. 
    
    Now you need to log the rest of the details out to the console and then see if 
    you can add different products to the list and see if it will still work. 
    
    
    
    The problem is now is that there are too many console logs and this is crowding
    the console. One of the things to do later is remove the redundant console 
    logs. 
    
    Okay so now let's reverse engineer how the products are rendered within the 
    shopping basket and apply it in a similar manner to the 
    
    shopping list. 
    
    
    
    
    
    
    
    */
    
    
    import React from 'react'; 
    
    
     export  default function useSessionStorage(keyName, defaultValue){
    const [storedValue, setStoredValue] = React.useState(() => {
      try {
        const value = window.sessionStorage.getItem(keyName);
        console.log(value); 
        
        if (value) {
          return JSON.parse(value);
        } else {
          window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
          
        }
      } catch (err) {
        return defaultValue;
      }
    });
  
    const setValue = newValue => {
      try {
        window.sessionStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {}
      setStoredValue(newValue);
    };
  
    return [storedValue, setValue];
  };    