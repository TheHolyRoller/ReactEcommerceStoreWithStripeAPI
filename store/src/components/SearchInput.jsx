import React, { useState } from "react";

// import '../Styles/SearchInput.css'; 
/**
 * 
 Okay so it seems like I've hit on the right track here 
 
 
 First of all without the CSS styling the search suggestions actually work. 
 
 
 So it means that things will need to be styled incrementally. 
 

 Okay so that I want to do now is attach an onchange function to the input bar. 
 
 Once something changes in the input bar I need to trigger the function 
 connected with the onChange event listener. 
 
 
 What this function will do is take the input that is currently in the input bar and map through 
 to try and find a match within the suggestions array. 
 
 If it does find a match which it will because the input way taken from a suggestion 
 within the input Array it will trigger the scroll function. 
 
 
 This scroll function will take the input that is currently in the input bar. 
 
 And it will run it through some checks then if the checks pass it will match it up 
 with the right dom element id and then scroll to that dom element with the corresponding 
 id. 
 
 
 Okay that sounds great. 
 
 
 
 Okay so I have the search suggestion and I also have something that can pickup the 
 
 suggested text and put it into the input and from there I have something that can set a 
 state variable to that input. 
 
 Now if I add a check at the beginning of the main function that runs through and 
 checks to see if the state variable that holds the suggested input is set to something 
 and if it is it runs another block of code that changes the outcome of the. 
 
 
 
 There are a few edge cases that need to be taken into account. 
 
 
 For example what if the user. Takes the search suggestion and then 
 
 deletes it puts in their own input without taking a search suggestion and then clicks 
 on the submit button. 
 
 Well there are a few solutions to this. First of all we could add an onChange event 
 Listener and we could listen for a backspace. This would then clear the state that is 
 currently holding the suggestion state. And then the programme would then first before 
 clearing the state would set the input state to the suggestion state. 
 
 Then the program would clear the suggestion state and clear the current input. 
 
 And then repeat the process either for what the user inputs into the input bar or 
 what the user clicks on the suggestion. 
 
 
 But for now let's not focus on those edge cases too much. It's important to maintain 
 momentum. For now I just need to implement the changing of state so that when the user 
 clicks on a suggestion. The suggestion is registered within the input holder. 
 
 This input holder will then be used within the function that 
 
 
 
 
 So just a note with the checking on the suggestion state variable. 
 
 In order to make the function work the way we want it to work we need to have a state variable 
 within this main function. 
 
 This state variable will capture the valid input either from the suggestion 
 state variable or from the input state variable. The suggestion state variable will 
 then be checked for a truthy value. 
 
 Once this has been done if it comes up with a truthy value and it is not undefined. 
 
 Then the state variable setting function will be called and it will set the state of the 
 main state variable for the main handling function to be the state of the suggestion 
 variable. 
 
 If the state of the suggestion state variable is falsy then we have an else statement. 
 
 This will run a block of code that will set the main state variable for the current function 
 to be that of the state of the input state variable instead. 
 
 
 Okay so that sounds like a good plan. Now it's just the execution. 
 
 
 First of all I need to get a feel for the current code in this file and decide what 
 needs bringing over. 
 
 Next I need to get a feel for the code in the main file and then decide on where the code 
 needs to go. 
 
 
  Okay let's work on getting the firebase functionality for the email signup and other stuff  
  going. 
  
  
  Okay so what's the plan for now. 
  
  Okay so the plan for now is basically to get the search bar integrated in. 
  
  Don't worry about firebase today but get things integrated as much as possible. 
  
  
  You can first start with the functionality then you can move onto add in the slide out 
  effect. 
  
  
  Okay so now get a feel for the code in this file and decide what needs taking from 
  this file into the main one. 
  
  Then go to the main file and decide where everything will need to be added. 
  
  
  
  
 
 */


// the suggestions array


// ADD IN 
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

// the search input component
function SearchInput() {
  // the state for the user input and the filtered suggestions
  
//   ADD IN 
  const [input, setInput] = useState("");
  
  const [suggestion, setSuggestion] = useState(""); 
  
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);


// ADD IN 
  const handleSuggestionClick = (suggestion) => {
    // update the input value with the clicked suggestion

    // ADD IN ALL STATE VARIABLES 
    setInput(suggestion);
    setSuggestion(suggestion); 
    
    console.log("this is the SUGGESTION242$@#$@#$")
    console.log(suggestion); 
    
    
    console.log("THIS IS THE SET INPUT!!!#@!#!@"); 
    console.log(input); 
    
    // clear the filtered suggestions
    setFilteredSuggestions([]);
  };



  // the handler for the input change
  
  
//   ADD IN 
  const handleInputChange = (e) => {
    // get the user entered value
    let userData = e.target.value;
    
    if(input){

    console.log("this is the INPUT ")
    console.log(input); 
        
    }
    
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
    setInput(userData);
    
  };

  // the handler for the suggestion click

 
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search..."
        // ADD IN 
        value={input}
        onChange={handleInputChange}
      />

      {/* ADD IN  */}
      <div className="resultBox">
        {filteredSuggestions.map((suggestion, i) => (
          <li key={i} onClick={() => handleSuggestionClick(suggestion)}>
          
            {suggestion}
            
          </li>
        ))}
      </div>
    </div>
  );
}

export default SearchInput;
