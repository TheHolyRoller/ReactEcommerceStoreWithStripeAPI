import React from 'react';
import { useParams } from 'react-router-dom'; // import the useParams hook from react-router-dom
// import data from './data'; // import the javascript object from another file
// import PRODUCTS from '../Data/products'; 


import { PRODUCTS } from '../Data/products';
// A function component that renders the details of a selected item based on the url path
function CardDetails() {
  // A variable that holds the id parameter from the url path
  const { id } = useParams();

  // A variable that holds the item that matches the id parameter
  const item = PRODUCTS.find((item) => item.id === Number(id));

console.log(item); 
console.log("is this finally working???"); 
console.log(item.id); 


const {productName, price, productImage} = item; 


  return item ? (
    <div className="card-details">
      <h3>{item.productName}</h3>
      <p>{item.price}</p>
      <p>{item.productImage}</p>
      <img src={productImage}/>
    </div>
  ) : (
    <div className="error">
      <p>Item not found</p>
    </div>
  );
}

export default CardDetails;
