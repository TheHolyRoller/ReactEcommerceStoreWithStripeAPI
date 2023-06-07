import React from "react";


const Message = ( props ) => {

console.log("WHY IS PROPS NOT WORKING"); 
console.log(props.message); 

    
  return (
    <div
      className="message">
      
      HI 
      
      
      <img
        className="chat-bubble__left"
        // src={message.avatar}
        alt="user avatar"
      />
      
      Why is this not working 
      
      <div className="chat-bubble__right">
        
        <p className="user-message">

        {props.message}
        </p>
      </div>
    </div>
  );
};
export default Message;
