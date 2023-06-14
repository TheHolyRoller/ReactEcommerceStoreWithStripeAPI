/** 



*/


import React, { useState, useRef } from "react";
import {Hidden, ListItem, Button, TextField } from '@mui/material'

import { scroller } from "react-scroll";
import { FaSearch } from "react-icons/fa";

import { getRefById } from '../components/Cards'; 


let suggestions = [
  "element",
  "button",
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vehicles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to became Freelancer",
  "How to became Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];
const scrollToElement = (id) => {
  
  
  
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};



// A custom hook to handle the input value and validation
const useInput = (initialValue) => {

  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);


  const [suggestion, setSuggestion] = useState(""); 
  
  const [changed, setChanged] = useState(false); 
  
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
  
  const handleSuggestionClick = (suggestion) => {
    
    setChanged(true); 
    
    
    setSuggestion(suggestion); 
    setValue(suggestion); 
    
    
    console.log("this is the SUGGESTION242$@#$@#$")
    console.log(suggestion); 

    setFilteredSuggestions([]);

    
  };

  // A function to update the value and check if it matches one of the valid words
  const handleChange = (e) => {
    

    
    console.log("this is the value ")
    console.log(value); 
    setValue(e.target.value); 

    console.log("THIS IS THE VALUE SUGGESTION"); 
    console.log(suggestion); 
        
 
      
    const validWords = ["button", "element"];
    let userData = e.target.value;
    
    console.log("THIS IS THE VALUE OF THE EVENT"); 
    console.log(e.target.value); 
    console.log(userData); 
    
    // filter the suggestions based on the user value
    let emptyArray = [];
    
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        //filtering array value and user characters to lowercase and return only those words which are start with user entered chars
            return data
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
    }
    // update the state with the filtered suggestions and the input value
    setFilteredSuggestions(emptyArray);

    
    if (validWords.includes(e.target.value.toLowerCase())) {
      setError(null);
    } else {
      setError("Please enter one of the valid words: " + validWords.join(","));
    
    }
  
  };
  

  return { value, error, filteredSuggestions, suggestion, changed, handleChange, handleSuggestionClick };
  
  
};

// 
const SearchBar = () => {
  
  const [input, setInput] = useState("");
  
  const { value, error, filteredSuggestions, suggestion, changed, handleChange, handleSuggestionClick } = useInput("");
  
  const map = {
    "one": "card1",
    "two": "card2",
    "three": "card3",
    "four": "card4",
    "five": "card5"
  };
  
  
  if(map.hasOwnProperty(value)){
    
    
      const idRef = map[value]; 
      
      
      
      // Work on solving this erorr. 
      
      // This is no longer a custom hook so you can call it now but update it 
      
      // const ref = useGetRefById()
    
    
    
  }
  
  // A ref to store the submit button element
  const submitRef = useRef(null);

  // A ref to store the element element
  const elementRef = useRef(null);

  // A function to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // If there is no error, scroll to the corresponding element based on the input value
    if (!error) {
      // Define an object that maps the valid words to the refs of the elements
      const refMap = {
        button: submitRef,
        element: elementRef,
      };
      // Get the ref of the element based on the input value
      console.log("THIS IS THE VALUE ");
      console.log(value); 
      
      
      const ref = refMap[value.toLowerCase()];
      // Scroll to the element with the id of the ref
      scrollToElement(ref.current.id);
    }
  };

  return (
  <>
    <form htmlFor="" onSubmit={handleSubmit}>
    
    
    
      <TextField
        label="Search"
        variant="outlined"
        value={value}
        onChange={handleChange}
        error={!!error}
        style={{height: "0.3rem"}}
        helperText={error}>
        
        </TextField>
        {/* Position this later  */}
            <FaSearch style={{fontSize: "1.28rem"}} />
      <Button
        type="submit"
        variant="contained"
        style={{opacity: "0"}}
             >
            {/* <FaSearch style={{fontSize: "1.28rem"}} /> */}

        {/* Submit */}
      </Button> 
    
    </form>
    
    
    
    {/* <div  id="submit-button" ref={submitRef} style={{width: "100vw", marginTop: "100vh",  minHeight:"100vh", backgroundColor: "blue"}} ></div> */}

    
    {/* <div style={{width: "100vw", marginTop: "100vh",  minHeight:"100vh", backgroundColor: "red"}} ref={elementRef} id={"element"}>
        This is another element
      </div> */}
    

    
  </>
    
    
  );
};

export default SearchBar;
