import React, { useState, useRef } from "react";

// An array of string options to provide the content and suggestions for the search bar
const options = ["apple", "banana", "carrot", "date", "eggplant", "fig", "grape"];

// A custom component that renders a search bar with suggestions
function SearchBar() {
  // A state variable to store the user input
  const [input, setInput] = useState("");

  // A state variable to store the filtered suggestions based on the input
  const [filteredOptions, setFilteredOptions] = useState(options);

  // A ref object to store the references to the DOM elements that correspond to the options
  const refs = useRef({});

  // A function that handles the input change event
  const handleChange = (e) => {
    // Get the input value
    const value = e.target.value;


    // Set the input state
    setInput(value);

    // Filter the options based on the input value
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    // Set the filtered options state
    setFilteredOptions(filtered);
  };

  // A function that handles the click event on a suggestion
  const handleClick = (option) => {
    // Get the ref object for the selected option
    const ref = refs.current[option];
    
    console.log(option); 
    
    

    // If the ref object exists, scroll it into view with smooth behavior and center alignment
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
      
      const value = ref; 
      // setInput(value); 
      console.log(ref); 
      
      
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
      />
      <div className="suggestions">
        {filteredOptions.map((option) => (
          <div
            key={option}
            className="suggestion"
            onClick={() => handleClick(option)}
            // Assign a ref to each suggestion element using a callback function
            ref={(el) => {
            
              refs.current[option] = el;
            }}
          >
          
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
