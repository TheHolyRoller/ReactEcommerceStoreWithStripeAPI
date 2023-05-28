/**




*/



import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../Data/products";
import { ListContext } from '../ListContext';



function ListProduct(props) {
    const list = useContext(ListContext);
    // console.log(cart); 
    
    console.log("these are the props"); 
    
    console.log(props); 
    console.log(props.id); 
    
    const id = props.id;
    const quantity = props.quantity;
    
    // Find out why this is undefined 
    const productData = getProductData(id);
    
    console.log(productData); 
    const productsCount = list.items.reduce((sum, product) => sum + product.quantity, 0);

    console.log(productsCount); 
    console.log("these are the items in the list "); 
    


    return (
        <>
            <h3>{productData.productName}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => list.deleteFromList(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default ListProduct;