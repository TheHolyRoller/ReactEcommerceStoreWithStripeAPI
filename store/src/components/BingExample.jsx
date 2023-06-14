// removed React imports and hooks
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

// removed export default function BingExample()
let input = ""; // used a regular variable instead of a state variable
let filteredOptions = options; // used a regular variable instead of a state variable
let refs = {}; // used a regular object instead of a ref object
 const handleChange = (e) => {
  const value = e.target.value;

  input = value; // updated the input variable directly
  console.log("is this handleChange function working??")
  const filtered = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  ); // added closing parenthesis
   filteredOptions = filtered; // updated the filteredOptions variable directly
};

    const handleClickScroll = () => {

      const txtSearch = document.getElementById('txtSearch');
      const btnSearch = document.getElementById('btnSearch'); 

    // removed unused variables and functions
      const buttonClick = () => {
        btnSearch.click() 
        console.log("Enter has been pressed!"); 
      }
      txtSearch.onkeydown= e => (e.key === "Enter") ? buttonClick()  : 1
    if (input){ 

      if(input === "button"){ 

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
}

function doSomething(){
    console.log("Log");
    
    
}
function getButton() {
    return document.getElementById("button");
}

function setInputText() {

   let inputElement = document.getElementById("txtSearch"); // renamed input to avoid confusion with the global input variable
//    if(inputText){
   

       input = inputElement.value; // updated the input variable directly
       console.log("The input text is: " + input);
    
//    }
}

function addButtonListener() {
   getButton().addEventListener("click", setInputText);
}

function init() {
   addButtonListener();
   const button = document.getElementById('button'); 
   console.log(button); 
  
   const inputElement = document.getElementById("txtSearch"); // renamed input to avoid confusion with the global input variable
   inputElement.addEventListener("onChange", handleChange); 
  
   button.addEventListener("click", handleClickScroll);
}
  
const handleClick = (option) => {
    const ref = refs[option.toLowerCase()]; // used regular object notation instead of ref notation
    console.log(option); 
    console.log("is handle CLICK firing??")
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
      const value = ref; 
      console.log(ref); 
    }
};
window.onload = init;
// removed JSX code and used plain HTML instead
document.write(`
<div id="hero-section">
<input type="text" id="txtSearch" />
<input type="button" id="btnSearch" value="Search" onClick="doSomething()" />
<button type="submit" id="button" > Submit </button>
<div className="btn-scroll" > 
Scroll Down
</div> 
<div style="minHeight: '100vh', marginTop: '100vh', marginBottom: '100vh', backgroundColor: 'blue'" id="section-1">Section 1</div>
</div>
`);
