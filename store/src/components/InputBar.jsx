
// Add in the imports here 
import React, { useState, useRef, useEffect, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

// Import the material UI components here 
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    TextField,
    Button,
    Autocomplete,
  } from "@mui/material";
  // Replace @material-ui/icons with @mui/icons-material
  import ClearIcon from "@mui/icons-material/Clear";

// Define a function that renders the input bar and the button

 export const InputBar = () => {
    // Use useSelector to get the refs from the store
    const refs = useSelector((state) => state.refs);
    // Create a state variable for the keyword using useState hook
    const [keyword, setKeyword] = useState("");
    // Create a state variable for the error message using useState hook
    const [error, setError] = useState("");
    // Define a function that handles the change of the input value
    const handleChange = (event) => {
      // Set the keyword state to the input value
      setKeyword(event.target.value);
      // Clear the error message state
      setError("");
    };
    // Define a function that handles the click of the button
    const handleClick = () => {
      // Check if the keyword is empty or not a valid id
      if (!keyword || !refs[keyword]) {
        // Set the error message state to show an error message
        setError("Please enter a valid id!");
      } else {
        // Call scrollToComponent function with the keyword and refs
        scrollToComponent(keyword, refs);
      }
    };
    
     // Define a function that handles the selection of an option from the suggestion box
     const handleSelect = (event, value) => {
       // Check if the value is not null or undefined
       if (value) {
         // Set the keyword state to the value's id property
         setKeyword(value.id);
         // Clear the error message state
         setError("");
       }
     };
     
     // Define an array of options for the suggestion box using Object.keys on refs array 
     const options = Object.keys(refs).map((key) => ({ id: key }));
     
     // Return the JSX element for the input bar and the button using Material UI components
     
     return (
       <div style={{ margin: "20px" }}>
         {/* Use Autocomplete component from Material UI for the suggestion box */}
         <Autocomplete
           // Pass the options array as a prop
           options={options}
           // Pass a function that returns the option label as a prop
           getOptionLabel={(option) => option.id}
           // Pass a function that handles the selection of an option as a prop
           onChange={handleSelect}
           // Pass a function that renders the input element as a prop
           renderInput={(params) => (
             <TextField
               {...params}
               label="Enter an id"
               value={keyword}
               onChange={handleChange}
             />
           )}
         />
         <Button variant="contained" color="primary" onClick={handleClick}>
           Scroll to Component
         </Button>
         {/* Show an error message if there is one */}
         {error && <p style={{ color: "red" }}>{error}</p>}
       </div>
     );
   };
  
  // Define a function that scrolls to a component based on its id and refs
  const scrollToComponent = (id, refs) => {
    // Get the ref object for the given id from the refs array
    const ref = refs[id];
    // Check if the ref object exists and has a current property
    if (ref && ref.current) {
      // Get the offsetTop of the current element
      const offsetTop = ref.current.offsetTop;
      // Use the scroll.scrollTo method from react scroll library to scroll to the offsetTop
      scroll.scrollTo(offsetTop);
    }
  };
  