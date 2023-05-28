

/**

Okay so let's just talk things through now. 


 Now I have integrated in some UI Components. 
 
 They are not perfect yet but I have a good idea how I'm going to polish things up a bit. 
 
 Okay Great what next. 
 
 
 Well I still have the API to do for my images and I still need to integrate other 
 
 components into the project like the Email sign up as well as the contact form. 
 
 Shopping List and User Feedback as well as the payment system. 
 
 
 I also need to finish and polish off the UI components and the nav & footer. 
 
 Okay so now I'm going to polish and finish off the UI components in isolation. 
 
 Then I'm going to work on the nav bar and footer. 
 
 
 Once that is done then I'm going to work on integration and the Search component. 
 
 


Okay so now I have the UI components I just need to position them correctly on the 
page and at different screen sizes. 

Next I need to integrate functionality for the basket checkout and 
contact and email sign up forms. 

Then I need to integrate in the functionality for the product landing page and it's detials. 









*/






import {useState, useEffect, useContext, useReducer, useRef} from 'react'
import React from 'react'; 

import { Header } from './Header'
import Footer from './Footer'

import '../Styles/LayoutComponent.css'; 
import { Paper, Toolbar } from '@mui/material';
import { Outlet } from 'react-router';

const styles = {
  container: isRowBased => ({

    marginTop: isRowBased ? '140vh' : '90vh',


    
  })
};

export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);


  useEffect(() => {
    const handler = e => setMatches(e.matches);
    const emptyFunction = () => {}; 
    mediaMatch.addEventListener(handler, setMatches);
    
    
    console.log("is this actually working?????")
    return () => mediaMatch.removeEventListener(handler, setMatches);
  }, [matches]  );
  return matches;

};



function LayoutComponent({children}) {
  
  
  // For some reason this is always truthy 
  const isRowBased = useMediaQuery('(max-width: 600px)');
  
  console.log(isRowBased); 
  
  
  return (
  <>
  
  <div style={styles.container(isRowBased)} >
    {children}
    
  </div>

  </>
  )
}

export default LayoutComponent
