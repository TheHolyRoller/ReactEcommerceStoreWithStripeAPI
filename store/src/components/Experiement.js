/**
 
 Okay so let's just talk things through at the moment. 
 
 
 First of all creating the simple search bar is not very hard. 
 
 
 But most of the search bars are just input text fields with some suggestions and nothing 
 else. 
 
 I need to find a way of setting the input to the id of the element 
 
 that I want to scroll to and then calling the scroll function 
 
 when the enter key is pressed or when the search button is clicked. 
 
 
 Okay so I know that the simple javascript button and program works. 
 
 
 So what we need to is to adapt that javascript program but instead of just clicking 
 
 a button we need to set the variable that we use to search and 
 
 select the dom element's id we need to set that variable to the input 
 from the search bar. 
 
 Once that is done. Then we can trigger the scroll function. 
 
 That first checks if the variable holding 
 the id is truthy and then if it is then we grab the id of the element that we want to 
 scroll to. 
 
 In this case we use template literals to insert the string value of the current variable 
 into the select statement. 
 
 Then we store that value in a new variable and then we call the scrollIntoView 
 
 function on that variable that holds the id value of the dom node that we want to scroll to 
 
 
 
 Okay so let's just get our bearings. 
 
 
 First of all we have some working code that actually scrolls to a dom 
 node when a button is clicked. 
 
 What we are trying to do is replicate that. 
 
 First of all we have our input field. 
 
 Then we have the code that captures when the enter key is pressed and 
 
 then clicks the submit button. 
 
 
 What this submit button will do is take the input from the search bar and 
 
 assign it to a variable. 
 
 Then that variable will be checked to see if it contains a value and 
 if it does then we will add in the code to select the dom element 
 
 by the id and we will assign the id by adding in the value of the variable that 
 we just created using string interpolation or template literals. 
 
 Once that has been done and we've assigned the value of that select statement 
 
 to another variable then again after a check to see if the variable is truthy 
 
 we trigger the scrollIntoView function. 
 

Okay so let's just have a quick recap now. 



First of all we have a scroll function that works. 


It works by capturing the id of an element and using that id to scroll 
to the dom element that matches that id. 

The only problem is that in the main program the id is taken up with another vital 
value. 

This means that we cannot assign it a string value which is needed to the 
running of the search program. 

So we need to find a way around this. 

First of all we could probably move the functions and code from the 

search component into the same file as the product line up. 

Next if this works then what we could do is keep our id that has the unique 
numeric value of the dom element that it is a part of. 

Next we keep the same structure that is used to capture the string input 

from the input search bar. 

Then we run it through several checks. 

These checks will see if the text input matches with any of the string 

values provided. 

If they do when a certain block of code is triggered that scrolls 

to a particular id that has a numerical value. 


In future we could include in a hashmap to increase the speed of this searching 
and mapping but this will do for now. 


The only question remaining is how to we match up the numeric value of the id 

with the query to obtain that id. 

We we could try using numeric casting and we could also just try using the plain id 
since that is how the id is set on the dom element in the first place. 



 
 
 
 
 */

/**
  
  
  
 
 
 */

import React, { useState, useRef } from "react";


const options = ["apple", "banana", "carrot", "date", "eggplant", "fig", "grape"];
// const suggestions = ["Apple", "Banana", "Carrot", "Durian", "Eggplant"];


let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
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




const  searchSuggestion  = () => {

  
  
  
  
  
  
}


function BasicExample() {

// A variable to store the input value

// Suggestion area 
const [input, setInput] = useState("");

// A state variable to store the filtered suggestions based on the input
const [filteredOptions, setFilteredOptions] = useState(options);
const refs = useRef({});


 // A function that handles the input change event
 const handleChange = (e) => {
  // Get the input value
  const value = e.target.value;


  // Set the input state
  setInput(value);
  
  
  console.log("is this handleChange function working??")

  // Filter the options based on the input value
  const filtered = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  // Set the filtered options state
  setFilteredOptions(filtered);
};


let inputText = "";


    const handleClickScroll = () => {
      
      const txtSearch = document.getElementById('txtSearch');
      const btnSearch = document.getElementById('btnSearch'); 
      
    //   Add in the dom selection for suggestion here 
    const searchInput = document.getElementById("searchInput");
    const input = searchInput.getElementById("input");
    const resultBox = searchInput.getElementById("resultBox");
    const icon = searchInput.getElementById("icon");
    let linkTag = searchInput.getElementById("a");
    let webLink;
      
      
      
      const buttonClick = () => {
        btnSearch.click() 
        console.log("Enter has been pressed!"); 
      }
        
      txtSearch.onkeydown= e => (e.key === "Enter") ? buttonClick()  : 1
       // check if input text is truthy here 
    if (inputText){
      
      if(inputText === "button"){
        
        console.log("that was the right input!!!!!!")
      
        const element = document.getElementById("section-1");
        
        console.log(element.id);
        
        console.log("why is scroll not working "); 
        
          if(element){
          
            element.scrollIntoView({ behavior: 'smooth', block: "center" });
            console.log("this is strange "); 
            console.log(element); 
            
            
          }
        
      }

      
     
    };
  

function doSomething() {
  console.log('💩');
}


// A function that gets the input element by its id
function getInput() {
  return document.getElementById("txtSearch");
}

// A function that gets the button element by its id
function getButton() {
  return document.getElementById("button");
}

// A function that sets the inputText variable to the input value
function setInputText() {

   let input =  document.getElementById("txtSearch");
  inputText = input.value;
  console.log("The input text is: " + inputText);
  
}

// A function that adds a click event listener to the button element
function addButtonListener() {
  getButton().addEventListener("click", setInputText);
}


// A function that initializes the program
function init() {
  addButtonListener();
  const button = document.getElementById('button'); 
  console.log(button); 
  
 const input = document.getElementById("txtSearch"); 
  input.addEventListener("onChange", handleChange); 
  
  
button.addEventListener("click", handleClickScroll);
}


  // A function that handles the click event on a suggestion
  const handleClick = (option) => {
    // Get the ref object for the selected option
    const ref = refs.current[option];
    
    console.log(option); 
    console.log("is handle CLICK firing??")
    

    // If the ref object exists, scroll it into view with smooth behavior and center alignment
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
      
      const value = ref; 
      // setInput(value); 
      console.log(ref); 
      
      
    }
  };





// Call the init function when the window loads
window.onload = init;


  
    return (
      <>
        <div id="hero-section">
        
        <input type="text" id="txtSearch" />
        <input type="button" id="btnSearch" value="Search" onClick={doSomething} />
        
        {/* Why have these buttons disappeared  */}
        <button type="submit" id="button" > Submit </button>
          <button className="btn-scroll" >
            Scroll Down
          </button>
        
        <div  style={{minHeight: "100vh", marginTop: "100vh", marginBottom: "100vh", backgroundColor: "blue"}} id="section-1">Section 1</div>
        </div>
      </>
    );
  }
  
//   export default BasicExample;