


/** 

This holds all the code snippets and examples 


*/

// This is a modified version of the code that makes getRefById a custom hook and avoids calling it in the if statement

// Import React and React Scroll
import React, { useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

// Import Material UI components
import { Card, CardContent, CardMedia, Typography, TextField, Button } from "@material-ui/core";

// Define an array of objects that represent the card components
const cards = [
  {
    id: "card1",
    title: "Card One",
    image: "https://source.unsplash.com/random/300x200?1",
    content: "This is the first card in the array."
  },
  {
    id: "card2",
    title: "Card Two",
    image: "https://source.unsplash.com/random/300x200?2",
    content: "This is the second card in the array."
  },
  {
    id: "card3",
    title: "Card Three",
    image: "https://source.unsplash.com/random/300x200?3",
    content: "This is the third card in the array."
  },
  {
    id: "card4",
    title: "Card Four",
    image: "https://source.unsplash.com/random/300x200?4",
    content: "This is the fourth card in the array."
  },
  {
    id: "card5",
    title: "Card Five",
    image: "https://source.unsplash.com/random/300x200?5",
    content: "This is the fifth card in the array."
  }
];

// Define a map of key value pairs that map user input to reference ids
const map = {
  "one": "card1",
  "two": "card2",
  "three": "card3",
  "four": "card4",
  "five": "card5"
};

// Define a custom hook that takes an id and returns the reference to the corresponding component
const useGetRefById = (id) => {
  // Create a ref object using useRef hook
  const ref = useRef(null);
  // Return the ref object
  return ref;
};

// Define a function that takes a keyword and scrolls to the component with that id
const scrollToComponent = (keyword, refs) => {
  // Check if the keyword is in the map
  if (map.hasOwnProperty(keyword)) {
    // Get the value from the map that corresponds to the keyword
    const value = map[keyword];
    // Get the ref object from the refs state using the value as a key
    const ref = refs[value];
    // Check if the ref object exists and has a current value
    if (ref && ref.current) {
      // Get the offset top of the current value
      const offsetTop = ref.current.offsetTop;
      // Use scroll.scrollTo function from React Scroll library to scroll to that offset with smooth animation
      scroll.scrollTo(offsetTop, { smooth: true });
    } else {
      // Alert the user if no match is found
      alert("No component with that id found.");
    }
  } else {
    // Alert the user if the keyword is not in the map
    alert("No valid keyword entered.");
  }
};

// Define a function that renders the input bar and the button
const InputBar = ({ refs }) => {
  // Create a state variable for the keyword using useState hook
  const [keyword, setKeyword] = React.useState("");
  // Define a function that handles the change of the input value
  const handleChange = (event) => {
    // Set the keyword state to the input value
    setKeyword(event.target.value);
  };
  // Define a function that handles the click of the button
  const handleClick = () => {
    // Call scrollToComponent function with the keyword state and refs prop




/** 








*/
















// This is a modified version of the code that does not call the getRefById custom hook conditionally.

// Import React and React Scroll
import React, { useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

// Import Material UI components
import { Card, CardContent, CardMedia, Typography, TextField, Button } from "@material-ui/core";

// Define an array of objects that represent the card components
const cards = [
  {
    id: "card1",
    title: "Card One",
    image: "https://source.unsplash.com/random/300x200?1",
    content: "This is the first card in the array."
  },
  {
    id: "card2",
    title: "Card Two",
    image: "https://source.unsplash.com/random/300x200?2",
    content: "This is the second card in the array."
  },
  {
    id: "card3",
    title: "Card Three",
    image: "https://source.unsplash.com/random/300x200?3",
    content: "This is the third card in the array."
  },
  {
    id: "card4",
    title: "Card Four",
    image: "https://source.unsplash.com/random/300x200?4",
    content: "This is the fourth card in the array."
  },
  {
    id: "card5",
    title: "Card Five",
    image: "https://source.unsplash.com/random/300x200?5",
    content: "This is the fifth card in the array."
  }
];

// Define a map of key value pairs that map user input to reference ids
const map = {
  "one": "card1",
  "two": "card2",
  "three": "card3",
  "four": "card4",
  "five": "card5"
};

// Define a function that takes an id and returns the reference to the corresponding component
const getRefById = (id) => {
  // Create a ref object using useRef hook
  const ref = useRef(null);
  // Return the ref object
  return ref;
};

// Define a function that takes a keyword and scrolls to the component with that id
const scrollToComponent = (keyword) => {
  // Check if the keyword is in the map
  if (map.hasOwnProperty(keyword)) {
    // Get the value from the map that corresponds to the keyword
    const value = map[keyword];
    // Get the ref object by calling getRefById function with the value
    const ref = getRefById(value);
    // Check if the ref object exists and has a current value
    if (ref && ref.current) {
      // Get the offset top of the current value
      const offsetTop = ref.current.offsetTop;
      // Use scroll.scrollTo function from React Scroll library to scroll to that offset with smooth animation
      scroll.scrollTo(offsetTop, { smooth: true });
    } else {
      // Alert the user if no match is found
      alert("No component with that id found.");
    }
  } else {
    // Alert the user if the keyword is not in the map
    alert("No valid keyword entered.");
  }
};

// Define a function that renders the input bar and the button
const InputBar = () => {
  // Create a state variable for the keyword using useState hook
  const [keyword, setKeyword] = React.useState("");
  // Define a function that handles the change of the input value
  const handleChange = (event) => {
    // Set the keyword state to the input value
    setKeyword(event.target.value);
  };
  // Define a function that handles the click of the button
  const handleClick = () => {
    // Call scrollToComponent function with the keyword state
    scrollToComponent(keyword);
  };
  // Return the JSX element for the input bar and the button
  return (
    <div style={{ margin: "20px" }}>
      <TextField label="Enter an id" value={keyword} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Scroll to Component
      </Button>
    </div>
  );
};

// Define a function that renders a card component using Material UI
const CardComponent = ({ id, title, image, content }) => {
  // Get the ref object by calling getRefById function with the id prop
  const ref = getRefById(id);
  // Assign it to a new variable called cardRef using useEffect hook
  const [cardRef, setCardRef] = React.useState(null);
  React.useEffect(() => {
    setCardRef(ref);
  }, [ref]);
  // Return the JSX element for the card component using Material UI components
  return (
    <div style={{ margin: "20px" }} ref={cardRef}>
      <Card>
        <CardMedia image={image} style={{ height: "200px" }} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

// Define a function that renders the app component
const App = () => {
  // Return the JSX element for the app component
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Program that takes an array of components and assigns a unique reference to each component</h1>
      <InputBar />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cards.map((card) => (
          <CardComponent key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

// Export the app component
export default App;
