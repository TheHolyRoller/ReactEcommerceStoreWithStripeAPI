import React, { useState, useRef } from "react";
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

 export default function BasicExample() {
const [input, setInput] = useState("");
const [filteredOptions, setFilteredOptions] = useState(options);
const refs = useRef({});
 const handleChange = (e) => {
  const value = e.target.value;

  setInput(value);
  console.log("is this handleChange function working??")
  const filtered = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredOptions(filtered);
};

let inputText = "";
    const handleClickScroll = () => {

      const txtSearch = document.getElementById('txtSearch');
      const btnSearch = document.getElementById('btnSearch'); 

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
function getInput() {
  return document.getElementById("txtSearch");
}

function getButton() {
  return document.getElementById("button");
}
function setInputText() {

   let input =  document.getElementById("txtSearch");
  inputText = input.value;
  console.log("The input text is: " + inputText);
}

function addButtonListener() {
  getButton().addEventListener("click", setInputText);
}

function init() {
  addButtonListener();
  const button = document.getElementById('button'); 
  console.log(button); 
  
 const input = document.getElementById("txtSearch"); 
  input.addEventListener("onChange", handleChange); 
  
button.addEventListener("click", handleClickScroll);
}
  const handleClick = (option) => {
    const ref = refs.current[option];
    console.log(option); 
    console.log("is handle CLICK firing??")
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
      const value = ref; 
      console.log(ref); 
    }
  };
window.onload = init;
    return (
      <>
        <div id="hero-section">
        <input type="text" id="txtSearch" />
        <input type="button" id="btnSearch" value="Search" onClick={doSomething} />
        <button type="submit" id="button" > Submit </button>
          <button className="btn-scroll" >
            Scroll Down
          </button>
        <div  style={{minHeight: "100vh", marginTop: "100vh", marginBottom: "100vh", backgroundColor: "blue"}} id="section-1">Section 1</div>
        </div>
      </>
    );
  }
  
  // export default BasicExample;