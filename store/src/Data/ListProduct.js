/**
 * 


*/



import Button from 'react-bootstrap/Button';

// Change this to list context 
import { ListContext } from "../ListContext"; 

import { useContext } from "react";
import { getProductData } from "../Data/products";


function ListProduct(props) {



    // Change this to list and List context 
    const list = useContext(ListContext);
    // console.log(cart); 
    
    console.log("these are the props"); 
    
    console.log(props); 
    console.log(props.id); 
    
    const id = props.id;
    
    const quantity = props.quantity;
    
    // Find out why this is undefined 
    const listData = getProductData(id);
    
    console.log(listData); 
    


    return (
        <>
            <h3>{listData.productName}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * listData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => list.deleteFromList(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default ListProduct;