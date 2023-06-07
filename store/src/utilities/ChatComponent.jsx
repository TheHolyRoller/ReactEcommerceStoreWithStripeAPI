
/** 

Okay so let's just talk things through. 

First of all I've got the basic functionality of sending and receiving messages down. 


The only problem is that I don't want all the reviews open on the page. 

I want to be able to show the average rating and then have the user click on the 

Rating average and then go onto another page and see all the reviews for the product. 

The only problem with this is how am I going to access all the variables that are available 
in the chat component. 


Then there is the problem of refreshing the page. 

This might just fix the problem of having the page refresh each time an item is added to the 
shopping basket or list. 

The only way I think this can work is if I import all the same variables in. 

And the repeat the same process to get a modified path. 

This is because I have the path of the product page set the product id. 

This is very much needed. The only problem is I can't have two routes with identical paths. 

There are a couple of possible ways around this however, first of all. I could add a bit 
onto the path before the id and then modify the path modifier slightly to cut 

out the prefix that is used to distinguish the path. This way we only get the product id 
part. 

There is also another option is to have a nested route. 

This means that the chat component or whatever is nested into it is the parent route. 

And since we are nesting the routes then we can have duplicate. 






*/












import React, { useState, useEffect, useRef } from "react";


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, limit } from "firebase/firestore";

import { useSelector, useDispatch } from 'react-redux';

import { updateRating, updateText } from '../actions/actions.js';



import ChatBox from "./ChatBox";

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link, useParams } from 'react-router-dom'; // import the Link component from react-router-dom
import { myURLID } from "../components/ImageMag";
import Message from "./Message";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Rating  from '@mui/material/Rating';
import { nanoid } from "nanoid";

import { modifiedPath } from "./SendMessage"; 


const firebaseConfig = {
  apiKey: "AIzaSyD0pOTf8ypx1kHf89oEnCwSUoDeEGl5rBs",
  authDomain: "reactchat-c3991.firebaseapp.com",
  projectId: "reactchat-c3991",
  storageBucket: "reactchat-c3991.appspot.com",
  messagingSenderId: "896740966457",
  appId: "1:896740966457:web:9e89ab17fe5e16ff8a4de8",
  measurementId: "G-98KYVKB7Q3"
};


console.log("this is the modified IMPORTED PATH"); 
console.log(modifiedPath); 
let collectionID
const myID = 'message'; 

 
if(modifiedPath){
  collectionID = modifiedPath; 
}
else{
  collectionID = myID; 
}

const chatApp = initializeApp(firebaseConfig);


 export const dataBase = getFirestore(chatApp);
const messagesRef = collection(dataBase, collectionID );
const querySnapshot = await getDocs(messagesRef);


function ChatComponent() {

  const rating = useSelector((state) => state.rating);
  const text = useSelector((state) => state.text);
  // Get the reviews prop from the Redux store
//   const reviews = useSelector((state) => state.reviews);

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Handle the change of rating input
  const handleRatingChange = (event, newValue) => {
    // Check if the input is a valid number between 1 and 5
    if (typeof newValue === 'number' && newValue >= 1 && newValue <= 5) {
      // Dispatch the action to update the rating in the store
      dispatch(updateRating(newValue));
    } else {
      // Show an error message
      alert('Please enter a valid rating between 1 and 5.');
    }
  };

  // Handle the change of text input
  const handleTextChange = (event) => {
    // Get the value of the input
    const value = event.target.value;
    // Dispatch the action to update the text in the store
    dispatch(updateText(value));
  };

  // Handle the click of submit button
  const handleSubmit = () => {
    // Check if the rating and text are not empty
    if (rating && text) {
      // Dispatch the action to add a new review to the store
      // dispatch(addReview({ rating, text }));
      // Clear the rating and text inputs
      dispatch(updateRating(0));
      dispatch(updateText(''));
    } else {
      // Show an error message
      alert('Please enter a rating and a text.');
    }
  };
  


  const [count, setCount] = useState(0)
  const [productID, setProductID] = useState("");
  
  
  // const [rating, setRating] = useState(); 

  const handleChange = (event, newValue) => {
    // setRating(newValue);
    
    console.log("THIS IS THE STAR RATING !!!!!"); 
    console.log(rating); 
    
  };
  
  
  
  var refresh = window.localStorage.getItem('refresh');
let loaded = window.localStorage.getItem('loaded');
console.log(refresh);
console.log(loaded);

var timeoutID;


function reloadPage() {
  window.location.reload();
  window.localStorage.setItem('refresh', "1");
}

function clearRefresh() {
  localStorage.removeItem('refresh');
  clearTimeout(timeoutID);
}

if (refresh === null) {
  timeoutID = setTimeout(reloadPage, 10);
}

setTimeout(clearRefresh, 2000);
  
  
const messageArray = []; 
    
  querySnapshot.forEach((doc) => {


    console.log("THIS SHOULD BE THE RESULT @$@#$")
    
    console.log(doc.id, doc.data());

    messageArray.push(doc.id, doc.data()); 
    
    console.log("THIS IS THE MESSAGES ARRAY"); 
    console.log(messageArray); 
    
  });
  

    
  const ids = [];  

  const reviews = [ 

    {text: "my text", rating: 5}, 
    {text: "good text", rating: 3}, 
    {text: "good review", rating: 5}
    
    
    
  ]

  return (
    <div className="ChatComponent">
      
    <ChatBox/>
    <Box>
      <Typography variant="h6">Rating Component</Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="body1">Rating:</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={handleRatingChange}
          icon={<StarIcon fontSize="large" />}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="body1">Text:</Typography>
        <input type="text" value={text} onChange={handleTextChange} />
      </Box>
      <button onClick={handleSubmit}>Submit</button>
      <Box>
        <Typography variant="h6">Reviews</Typography>
        {reviews.map((review, index) => (
          <Box key={index} display="flex" alignItems="center">
            <Rating
              name={`review-${index}`}
              value={review.rating}
              readOnly
              icon={<StarIcon fontSize="large" />}
            />
            <Typography variant="body1">{review.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
          
    </div>
    
  )
}

export default ChatComponent; 
