/** 

Okay so let's just talk things through. 

First of all we want this to render everything that we have in our list. 

This means that we'll need the list context and everything that comes with it. 


Then we'll need to create the basic page structure. 


One important thing to note is that the list page structure must be 

dynamic. 


This is because if more things are added to the list then more elements and page 
components need to be rendered. 


So the components need to rendered dynamically. 


One way we could do this is by looping through everything in an Array that 

stores all the items that are in the list. 

Then for each item in the Array we could render out a component with the correct 

information injected in. 


Okay so that's great. 




*/


import React from 'react'

// Import the List context here 

import { ListContext } from '../ListContext'; 
import { PRODUCTS } from '../Data/products';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../Data/products";


function List(props) {
    const list = useContext(ListContext);
    // console.log(cart); 
    
    console.log("these are the props"); 
    
    console.log(props); 
    console.log(props.id); 
    
    const id = props.id;
    // const quantity = props.quantity;
    const listCount = list.items.reduce((sum, product) => sum + product.quantity, 0);
    console.log(listCount);
    console.log("this is the list count "); 
    
    
    // Find out why this is undefined 
    const productData = getProductData(id);
    
    console.log(productData); 
    const productsCount = list.items.reduce((sum, product) => sum + product.quantity, 0);

    console.log(productsCount); 
    console.log("these are the items in the list "); 
    


  return (
  
//   Find an example of mapping out components and apply it here 

/** 
{PRODUCTS.map((product, index) => (
                   
                <Cards className={product.productClass} product={product}  id={product.id} key={product.id}  image={product.productImage} title={product.productName}  > 
                
                <Link>
                Learn More
                </Link>  
                
                </Cards>
               ))} 

*/
  
    <div>
      List 
      {/* {list} */}
      
      
    </div>
  )
}

export default List
