/** 

Okay so let's talk things through here. 


First of all the search bar is working again which is great. 

Next all the other components work quite well some of them just need 

tweaking a bit. 

Okay so that's good

The main problem with the Customer feedback section is that when the user clicks on a product 

It does not load in the product review details but instead loads in the default collection. 


So we need a way around this. 

In future I would probably use Redux. 


And when the page loads I would send a select request to get all my data from the database. 

But for now we'll use a quicker solution. 

Okay so the way I'm going to do this is by using a function 
that refreshes the page almost immediately when I click on the product. 


I think the problem before was that the page was never fully loading. 







*/



import {Row, Col,} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    TextField,
    Button,
    Autocomplete,
  } from "@mui/material";

import { PRODUCTS } from '../Data/products';
import Cards from '../components/Cards'; 


import { useGetRefById } from '../components/InputBar'; 


import { useParams, Link } from 'react-router-dom';


import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';




import {  CardActionArea, CardActions } from '@mui/material';


import React, { useState, useRef, useEffect, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import { selectedCardId } from '../components/CardList';
import SearchBar from '../components/SearchBar';



function Store(props) {
   
    const cardRefs = useRef(PRODUCTS.map(() => React.createRef()));
    // Use useDispatch to get the dispatch method from the store
    // const dispatch = useDispatch();
    // Use useEffect to dispatch an action to set the refs in the store
    useEffect(() => {
      // dispatch({ type: "refs/setRefs", payload: cardRefs.current });
    }, []);
    

    const [currentId, setCurrentId] = React.useState(); 
    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Row xs={1} md={3} className="g-4" style={{ maxWidth: "99.9vw", marginLeft: "0.1vw", outline: "4px solid lime"}} >
             
               
               {PRODUCTS.map((product, index) => (
                
                
                <Cards className={product.productClass} product={product}  image={product.productImage} id={product.id} name={product.productName} price={product.price}  ref={cardRefs.current[index]}     > 


                </Cards>
               ))} 

            </Row>
        </>
    )
    
    
}

export default Store;


