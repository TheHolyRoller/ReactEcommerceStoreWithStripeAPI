import React from "react";

// Add in the stylesheet here 
import '../Styles/Product.css'; 


export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      
    </div>
  );
}