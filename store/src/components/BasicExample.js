


import React, { useState, useRef } from "react";
// import '../Styles/SearchSuggestion.css'; 


const options = ["apple", "banana", "carrot", "date", "eggplant", "fig", "grape"];
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


// Add in the show suggestion function here 

function showSuggestions(){

        
  const searchInput = document.getElementById("searchInput");
  const input = document.getElementById("input");
  const resultBox = document.getElementById("resultBox");
  const icon = document.getElementById("icon");
  let linkTag = document.getElementById("a");
  let webLink;
  
  
  if(input){
    input.onkeyup = (e) => { 
        let userData = e.target.value; //user enetered data
        let emptyArray = [];
        
        
        console.log("is input working???")
        
        if(userData) {
            emptyArray = suggestions.filter((data)=>{
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
            });
            emptyArray = emptyArray.map((data) => {
                // passing return data inside li tag
                return data = '<li>'+ data +'</li>';
            });
          
            searchInput.classList.add("active"); //show autocomplete box
            showSuggestions(emptyArray);
            let allList = resultBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                //adding onclick attribute in all li tag
                allList[i].setAttribute("onclick", "select(this)");
            }
        }else{
            searchInput.classList.remove("active"); //hide autocomplete box
        }
    }
}
    
    function showSuggestions(list){
        let listData;
        if(!list.length){
          let  userValue = input.value;
          
          console.log(input.value); 
          
            listData = '<li>'+ userValue +'</li>';
        }else{
            listData = list.join('');
        }
        resultBox.innerHTML = listData;
    }
    
   
}


function BasicExample() {

    const [input, setInput] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);

    let inputText = "";
    const handleClickScroll = () => {
      
  // ---------THESE NEEDS CHANGING IN THE IDS THAT THEY GET AND THE VARIABLE NAMES 
      // ++++!!!!!!!!!
      // const txtSearch = document.getElementById('txtSearch');
      // const btnSearch = document.getElementById('btnSearch'); 
      const txtSearch = document.getElementById('input');
      const btnSearch = document.getElementById('btnSearch'); 
      
      const buttonClick = () => {
      
      // =======-----THIS VARIABLE NAME NEEDS CHANGING 
        btnSearch.click() 
        console.log("Enter has been pressed!"); 
      }
      
      
      txtSearch.onkeydown= e => (e.key === "Enter") ? buttonClick()  : 1
       // check if input text is truthy here 
    if (inputText){
      
      if(inputText === "button"){
        
        console.log("that was the right input!!!!!!")
      
      // THIS WON'T NEED TO BE ALTERED 
        const element = document.getElementById("section-1");
        
        console.log(element.id);
        
        console.log("why is scroll not working "); 
        
          if(element){
          
            element.scrollIntoView({ behavior: 'smooth', block: "center" });
            console.log("this is strange "); 
            console.log(element); 
            
            
          }
        
      }

     
    }
     
    };
  

function doSomething() {
  console.log('💩');
}

function getInput() {

// -----THIS WILL NEED CHANGING IN THE ID THAT IT OBTAINS 
  return document.getElementById("txtSearch");
  // return document.getElementById("input");
}

function getButton() {

// THIS ID WILL ALSO NEED CHANGING 
  return document.getElementById("button");
}

function setInputText() {


  // THESE IDS WILL NEED CHANGING
  //  let input =  document.getElementById("txtSearch");
   let input =  document.getElementById("input");
  inputText = input.value;
  console.log("The input text is: " + inputText);
  
}

function addButtonListener() {

  getButton().addEventListener("click", setInputText);
}


function init() {
  addButtonListener();
  
  // Call the show suggestion here 
  showSuggestions(); 
  
  
  const button = document.getElementById('button'); 
  console.log(button); 
  
  
  // THIS ID WILL NEED CHANGING 
//  const input = document.getElementById("txtSearch"); 
 const input = document.getElementById("input"); 
  
button.addEventListener("click", handleClickScroll);
}


  const handleClick = (option) => {
    
    console.log(option); 
    console.log("is handle CLICK firing??")
  
  };

  
window.onload = init;
  
    return (
      <>
        <div id="hero-section">
        
        <input style={{margin: "4rem", padding: "1rem"}}  type="text" id="txtSearch" />
        <input type="button" id="btnSearch" value="Search" onClick={doSomething} />
        {/* <button type="submit" id="button" > Submit </button> */}
          <button className="btn-scroll" >
            Scroll Down
            
          </button>
        
        
        <div  style={{minHeight: "100vh", marginTop: "100vh", marginBottom: "100vh", backgroundColor: "blue"}} id="section-1">Section 1</div>
        </div>
        
        
        {/* SEARCH SUGGESTION  */}
        <div id="container" className="container">
      {/* Find out why this is null  */}
      <div  id="searchInput" className="searchInput">
        <input  id="input" type="text" placeholder="Enter some Text "  />
        
        <div id="resultBox"  className="resultBox">
          
          
        </div>
        <div id="fas fa-search"  className="icon"><i className="fas fa-search" /></div>
      
      </div>
      
        <input   type="button" id="btnSearch" value="Search" onClick={doSomething} />
        <button   type="submit" id="button" > Submit </button>
        {/* <div  style={{minHeight: "100vh", marginTop: "100vh", marginBottom: "100vh", backgroundColor: "blue"}} id="section-1">Section 1</div> */}
        
      
    </div>
        
        {/* 
        
        
        SCHEMA 
        
        
        
        
        
        */}
        
        
      </>
    );
  }
  
  export default BasicExample;