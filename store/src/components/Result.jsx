import React from 'react';

// Names of the props we expect to receive
const keys = ['title', 'description', 'price', 'rating', 'category'];

function Result(props) {
    
    return(
        <div>
          {`keys.map((key) => (
            <span>{key.charAt(0) + key.slice(1)}: {props[key]}</span>
            )`}
            </div>
);

}
export default Result;