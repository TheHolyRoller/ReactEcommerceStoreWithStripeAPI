/** 
Okay so let's just talk things through now. 

So I can set the Rating along with the stars and I can add a rating along with the amount 
of stars and I can render it to the screen. 


Okay so that's good. 

The main thing I want to do now is take number from the star rating from every review and 
render it out to the screen. 

So basically I'll do this within the card that renders out each message. 

Now the thing is I need to get hold of each rating number and set it to a variable. 

Once this variable has been set then I can plug it into the rating component provided 
by material ui. 


So let's get a feel for how the messages are rendered out to the screen and see how we can 
build on this. 




*/





import { useState } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import { dataBase } from './ChatComponent';

import { useParams, Link } from "react-router";

export let productID = "myid"; 
export const currentPath = window.location.pathname;

console.log("WILL THIS ACTUALLY COME UP WITH ANYTHING???@$@#")
console.log(currentPath); 
 
 export const modifiedPath = currentPath.substring(1);

const SendMessage = () => {

const { id } = useParams(); 
  const customer = "Anonymous"; 
  
  const [rating, setRating] = useState(); 

  const handleChange = (event, newValue) => {
    setRating(newValue);
    
    console.log("THIS IS THE STAR RATING !!!!!"); 
    console.log(rating); 
    
  };
  
  
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Reviews cannot be empty!"); 
      
      return ; 
    }
    
       productID = "myid";
    await addDoc(collection(dataBase, id ), {

              message: message,
              id: productID,
               rating: rating, 
               user: customer
            
    });
    setMessage("");
    
    
  };
  
  console.log("This is harder than expected"); 
  
  const [message, setMessage] = useState("");
  
  return (
    <form onSubmit={(e) => sendMessage(e)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      
      {/* Add in the material UI Start Rating component here  */}
      <Stack spacing={1}>
      <Rating onChange={handleChange}  name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
    </Stack>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;