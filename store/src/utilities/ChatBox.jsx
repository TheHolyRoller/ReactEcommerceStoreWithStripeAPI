import React, { useEffect, useState } from "react";

import  dataBase   from './ChatComponent'; 
import Message from './Message'; 
import SendMessage from './SendMessage'; 

import { useParams, Link } from "react-router";
import Card from '@mui/material/Card';
import { getFirestore, collection, getDocs, query, orderBy, limit } from "firebase/firestore";




  let myCollectionID = "myid"; 

const ChatBox = () => {

  
  const [messages, setMessages] = useState([]);

  return (
    <main className="chat-box">
     
      <SendMessage  />
      
    </main>
  );
};
export default ChatBox;


export {myCollectionID}; 
