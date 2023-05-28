/** 

Okay so let's just talk things through at the moment. 

Now I have two working search bars. 


The first one works to scrolling and the second one works with suggestions. 

Although the first one will work even if you put in a suggestion that does not match the 
id of one of the elements. 

This is because it is not reset afterwards. 

This can be fixed by resetting things when more input is placed into the search 
bar. 


Okay now the buttons for adding things to the basket and removing things to the 

basket works. It will reset, however, if the page is refreshed which will need fixing. 


Then I have the problem of checking out. It says that there is a network error. 

This is because the id on the products does not match any of the requirements for 
a stripe product id. 

To fix this I'll need to go onto stripe and create a whole bunch of products. 


Then I'll need to refactor the code for the cards so that they use this new 

form of id instead of just the simple integers 

And then we'll need to refactor the products javascript object and include these 
ids into each object. 

Then once that is done and all the errors are cleaned out. Then we can move onto to making
the shopping List as well as customer feedback. 



*/





import ImageMag from '../components/ImageMag'; 
import { useParams, Link } from 'react-router';


import '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/free-regular-svg-icons'; 
import '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-svg-core'


import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/free-regular-svg-icons'; 
import '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/free-regular-svg-icons'; 
import '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-svg-core'
import { Button, CardActionArea, CardActions } from '@mui/material';
import {  Form } from 'react-bootstrap';

    

import '../Styles/ProductLandingPage/ProductPage.css'; 
import { useState, useEffect, useRef, useReducer, useCallback, useContext } from 'react';
import { PRODUCTS } from '../Data/products';
import { CartContext } from "../CartContext";
import { ListContext } from '../ListContext'; 




import CartProduct from '../Data/CartProduct';
import { FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa";




function ProductPage(props) {
  
  const { id } = useParams();

  // A variable that holds the item that matches the id parameter
  const item = PRODUCTS.find((item) => item.id === (id));

console.log(item); 
console.log("is this finally working???"); 
console.log(item.id); 


const {productName, price, productImage} = item; 

  
  // Shopping Cart 
  // const cart = useContext(CartContext);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // const { id } = useParams();

  // const productId = useParams(); 

  // const item = PRODUCTS.find((item) => item.id === Number(id));
  
  
  
  console.log("is item null???"); 
  // console.log(item); 
  
  
  const cart = useContext(CartContext);
  
  const list = useContext(ListContext);
  
  
  console.log(cart); 
  console.log("is this the cart"); 
    
  
  const cardRefs = useRef([]);
  
  
  console.log(props); 
  console.log(props.id); 
  
  
  
  
  

  // A state variable to store the selected item id
  const [selectedId, setSelectedId] = useState(null);
  
  const productId = useParams();    
  
  
  
  // Add in map function here to find the productID 
  // const product = PRODUCTS.find((product) => product.id === productId); 
  
  
  // This might be a problem as it is not tailored to the specific current card 
  // const product = props.product; 
  const product = item; 
  
  const productQuantity = cart.getProductQuantity(product.id);
  
  // Add in the function to get the List quantity here 
  const listQuantity = list.getProductQuantity(product.id); 
  
  
  console.log("this is the list quantity"); 
  console.log(listQuantity); 
  
  
  console.log(productQuantity); 
  console.log("does product have a quantity "); 
  
  // Currently product quantity is 0 
  
  
  // const productQuantity = cart.getProductQuantity(product.id);

console.log("is product not defined!!!!")  
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
  
  
  return (
    <div className="mainContainer" >
    <div className="imageZoomPositionalContainer" >
    
    <div className="imageZoomContainer" >
      
    <ImageMag/>
    </div>
      
      
    </div>    

    <div className="productDetailsContainer">
    
    <div id="productNameContainer" >
    
    <div id="titleFirstSection">
      Citizen
      
    </div>
    
    <div id="productTitleSectionContainer" >

    
    <div id="titleSecondSection">
    {productName}
    </div>
    </div>
    <div id="productMetaDataContainer" >
    <div id="productMetaData">
    Model AT2240-51E      
    
    </div>
    </div>
    
    </div>
    <div id="productSectionDividerLineContainer" >
    

    <div id="productSectionDividerLine" >
    </div>
    </div>
    
    
    <div id="productDetailsSectionContainer">
    <div id="productDetailsSection">
      
    <div id="productDetailRow">
    
      
    <div id="productDetailHeader" >
    Movement 
    </div>
    
    <div id="productDetailMeta">
      Echo Drive H504 
    </div>
      
    
    
    
    </div>
    <div id="productDetailRow">
    <div id="productDetailHeader" >
    Movement 
    </div>
    
    <div id="productDetailMeta">
      Echo Drive H504 
    </div>
    
    
    </div>
    <div id="productDetailRow">
    <div id="productDetailHeader" >
    Movement 
    </div>
    
    <div id="productDetailMeta">
      Echo Drive H504 
    </div>
    
    </div>
      
      
      
    </div>
    <div id="sectionDividerLineContainer">

    <div id="sectionDividerLine">
    </div>
    </div>
    
    
    <div id="productPriceSectionContainer">
    
    <div id="productPrice">
      ${price}

    </div>
    </div>
    </div>
    
    {/* Add in the Button Section here  */}
    
    <div id="CTASectionContainer">

    
    <div id="productButtonSectionContainer">
    
    <div id="productButtonSection">
    
    {/* Add in the Main button here  */}
    <div id="productButtonContainer" >
    {/* Add in the Add to Cart button here 
    */}
    
    <div id="productButton" >
    ADD TO CART 
    { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
    
    </div>
    </div>
      
      
    <div id="addToListContainer" >
    <div id="addToListButton">
    {/* Add in the Font Awesome Heart Icon here  */}
   
        { listQuantity > 0 ?
                    <>
                        
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In List: {listQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => list.addOneToList(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => list.removeOneFromList(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => list.deleteFromList(product.id)} className="my-2">Remove from list</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => list.addOneToList(product.id)}>Add To List  <FontAwesomeIcon icon={faHeart} />  </Button>
                }
    
    
    </div>


    </div>  
      
    </div>
      
    </div>
      
    </div>
      
    </div>
    {/* </Container> */}
    </div>
  
  );
}

export default ProductPage
