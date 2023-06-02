import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // import the Link component from react-router-dom


import { PRODUCTS } from '../Data/products';
import {NavItem} from 'react-bootstrap'


// A sample javascript object with some data
const data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];



 export default function CardList() {

  
  const cardRefs = useRef([]);


  
  const [selectedId, setSelectedId] = useState(null);
  
  const productId = useParams();    
  
  
  const product =   PRODUCTS.find((product) => product.id === productId); 
  
  console.log(product);
  

  useEffect(() => {
    cardRefs.current.forEach(ref => console.log(ref));

  }, [selectedId]);

  // A function that assigns a ref object to the card element based on the item id
  const assignRef = (element, id) => {
    if (element) {
      cardRefs.current[id - 1] = element;
    }
  };

  // A function that sets the selected id to the state variable when a card is clicked
  const handleClick = (id) => {
    setSelectedId(id);
    console.log(id); 
    console.log("is this logging the id ")
  };

  // A function that renders a card element for each item in the data
  const renderCard = (item) => {
    
    console.log(item); 
    console.log("is this firing?????????!!!")
    
    return (
      <div
        key={item.id}
        ref={(element) => assignRef(element, item.id)} // assign a ref object to the card element
        className="card"
        onClick={() => handleClick(item.id)} // set the selected id when the card is clicked
      >
        <h3>{item.name}</h3>
        <p>{item.age}</p>
        <Link to={`/${item.id}`}>View Details</Link> 
        
        
        {/*     // add a Link component with a dynamic path based on the item id */}
      </div>
    );
  };

  return <div className="card-list">{data.map(renderCard)}</div>;
}

// A variable that holds the value of the selected id
const selectedCardId = CardList.selectedId;

// Export the variable as a prop
export { selectedCardId };
