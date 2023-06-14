/** 
BING CHAT DO NOT DELETE!!!!!!!!!!

https://www.bing.com/search?form=WSBSH2&cvid=b77a9efa39124da78f9c26ef9989e207&nclid=90830066AB564B8DEF9A2EE70A6F1758&ts=1685439378759&q=What+can+the+new+Bing+chat+do%3f&showconv=1

*/


/**  






*/





import React from 'react'

// Import the List context here 

import { ListContext } from '../ListContext'; 
import { PRODUCTS } from '../Data/products';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../Data/products";
import { ListItem } from '@mui/material';

import {Button,  Card,  Modal} from 'react-bootstrap';



import CartProduct from '../Data/CartProduct'; 
import Cards from './Cards';
import ListCards from './ListCards';
import matches from 'dom/lib/matches';



function List(props) {
    const list = useContext(ListContext);
    
    console.log(props); 
    
    const id = props.id;
    
    console.log("WE'RE TRYING TO GET THE ITEM ID HERE "); 
    
    console.log(list.items);
    
    let ids = [];
    
    
    list.items.map((obj) => {
    
    if(obj.hasOwnProperty("id")){
    
      
      console.log("is this map ACTUALLY WORKING???!#@$@")
      console.log(obj.id); 
    
      ids.push(obj.id); 
      
      
    }
    
    })
    
    const myItems = list.items; 
    
    let myProduct = [{}];
    
    
    console.log()
    
    // Loop through the products Array here and Add each object into a new Array that matches the id 
    ids.forEach((id) => {
      
      // Why does this render out an empty item. 
      
      let match  = PRODUCTS.find((obj) =>  obj.id === id); 
      
      
      if(match){
        
        
        
        console.log("THIS IS THE MATCHING ARRAY AT WORK ")
        console.log(match);
        
        console.log("this is the match id "); 
        
        console.log(match.id); 
        
        
        myProduct.push(match); 
        console.log("this is the length of the product array"); 
        
        console.log(myProduct.length); 
        

      }
      
    } ) 
    
    myProduct.shift(); 
    
    
    
    // console.log("IS THIS THE ITEM ID??????")
    
    // const myID = myItems.id; 
    
    const listCount = list.items.reduce((sum, product) => sum + product.quantity, 0);
    
    const listItems = list.items; 

    const productData = getProductData(id);
    
  return (

    <div>
      List 
      {listCount > 0 ? 
        <>
     <p>Items in your cart:</p>
        
        {/* Find out why it''s saying this is not a function  */}
     {myProduct.map((currentProduct, idx) => (

       <ListCards  key={idx} product={currentProduct} id={currentProduct.id} image={currentProduct.productImage} title={currentProduct.productName}  quantity={currentProduct.quantity}>
       Card
       </ListCards>
       
        ))}

       <h1>Total: {list.getTotalCost().toFixed(2)}</h1>

       <Button variant="success">
          Remove from List 
         </Button>
         </>
         
          :
          <h1>There are no items in your cart!</h1>
      }
      
    </div>
  )
}

export default List
