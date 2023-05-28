
// import React from 'react'
/** 
Okay so let's just talk things through. 


Although it is late in the day and although I'm tired. 

There is still hope to get this image slider done. 

Okay so the plan is to use the several image sliders that I have already. 

And if they do not work properly to make one from scratch. 

Using material UI Components and helper elements of course. This will help 

keep things in line and make things simpler. 


Okay so I have a rough idea of how I'm going to make the image slider 

from scratch and I can even use a few animation apis to make the sliding smoother. 


Then I have an npm package that does this for me. So for now I'll try using that. 




\*/









// This is clashing with the other style sheets 
// import '../Styles/HorizontalScroll.css'; 


// Import the CSS style Module here 

// import { Container } from 'react-bootstrap';
import { Container } from "@mui/system";


// Import React and useState hook
import React, { useState, useRef } from "react";

// Define a custom component for the button


// Export the component
// export default ScrollButton;


function HorizontalScroll() {

  const container = useRef()  
  
  const [direction, setDirection] = useState(""); 
  
  // Define a scroll amount and a scroll duration
  const scrollAmount = 100; // pixels
  const scrollDuration = 0.5; // seconds
  
  const duration = scrollDuration; 
  
  const amount = scrollAmount; 
  
  
  
  

  // Define a state variable to store the container element
  // const [container, setContainer] = useState(null);
  
  console.log("Is this acutally working??");
  
  
  
  // These are undefined 
  console.log(container); 
  console.log(direction); 
  
  
  
  
  const handleLeftClick = () => {

    setDirection("left"); 
    console.log(direction); 
    
    
    console.log("is this firing "); 
    
    
    
  }
  
  
  
  const handleRightClick = () => {
    
    setDirection("right"); 
    console.log(direction); 
    
  }
  

  // Define a function to scroll the container by a given amount in a given duration
  function smoothScroll(container, amount, duration, direction) {
    
    console.log(direction); 
    
    
    
    // Get the current scroll position of the container
    let start = container.scrollLeft;
    // Calculate the end position after scrolling
    let end = start + amount;
    // Calculate the increment per frame based on the duration and the frame rate (60 fps)
    let increment = amount / (duration * 60);
    // A recursive function to scroll the container by one increment per frame
    function scroll() {
      // Update the scroll position by adding the increment
      container.scrollLeft += increment;
      // Check if the scroll position has reached the end position or the container boundaries
      if (
        (increment > 0 && container.scrollLeft >= end) ||
        (increment < 0 && container.scrollLeft <= end) ||
        container.scrollLeft + container.clientWidth >= container.scrollWidth ||
        container.scrollLeft <= 0
      ) {
        // Stop scrolling and set the scroll position to the end position
        container.scrollLeft = end;
        return;
      }
      // Request the next animation frame and call the scroll function again
      requestAnimationFrame(scroll);
    }
    // Start scrolling
    scroll();
  }

  // Define a function to handle the click event of the button
  function handleClick(event, setContainer) {
    
    console.log(setContainer); 
    
    // Get the button element from the event target
    let button = event.target;
    // Check if the container element is already stored in the state
    if (!container) {
      // Get the container element by its id and store it in the state
      setContainer(document.getElementById("scroll-container"));
    }
    // Check if the direction is left, make the scroll amount negative
    if (direction === "left") {
    
      // Find out why this is not working
      
      // Add in the current ref here 
      const  scrollLeft = container.current.scrollLeft
      const width = container.current.offsetWidth;


      const newScrollLeft = scrollLeft - width;

      
      // scrollAmount = -scrollAmount;
      // console.log(scrollAmount); 
      container.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
      
    }
    // Call the smoothScroll function with the container, scroll amount and scroll duration
    smoothScroll(container, scrollAmount, scrollDuration);
  }

  // Return the JSX for the button element with an onClick handler and a data-direction attribute
  // return (
  //   <button onClick={handleClick} data-direction={direction}>
  //     Scroll {direction}
  //   </button>
  // );

  
    
  return (
    <> 
    {/* Modify the CSS classes for CSS Modules  */}
    <header className="page-header"></header>
    
  
  <h2 className="section-title">Groups elements</h2>
  <div id="scroll-container" onClick={handleClick}  ref={container} data-direction={direction}  className="media-scroller media-scroller--with-groups snaps-inline">
  
  <button onClick={handleClick} onMouseOver={handleLeftClick} >
    <h1>Left Button</h1>
  </button>

  
    <div className="media-group">
      <div className="media-element">
        <img draggable={false} src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img draggable={false} src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img draggable={false} src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img draggable={false} src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
  
        <img  draggable={false} src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
    </div>
  
    
    
    
    
    
    <div className="media-group">
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1641118961077-440391095cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1640767014413-b7d27c58b058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
    </div>
  
    
    
    
    
    
    
    <div className="media-group">
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1642484865851-111e68695d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1642237778207-24985a0bf876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1643249960396-d39d2a63ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1641424222187-1c336d21804c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
    </div>
  
    
    
    
    
    
    
    
    <div className="media-group">
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1640998483268-d1faffa789ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODkwNA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1642034451735-2a8df1eaa2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1640808238224-5520de93c939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg4OQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1643039952431-38adfa91f320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
      <div className="media-element">
        <img src="https://images.unsplash.com/photo-1643148636637-58b3eb95cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
      </div>
    </div>
  
  </div></>

    
    
   
  )
}





export default HorizontalScroll




