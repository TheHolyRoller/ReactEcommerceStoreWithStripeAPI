/**




*/



import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../Data/products";


function CartProduct(props) {
    const cart = useContext(CartContext);
    
    
    console.log("these are the props"); 
    
    console.log(props); 
    console.log(props.id); 
    
    const id = props.id;
    const quantity = props.quantity;
    
    // Find out why this is undefined 
    const productData = getProductData(id);
    
    console.log(productData); 

    return (
    
        <>
            <h3>{productData.productName}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;