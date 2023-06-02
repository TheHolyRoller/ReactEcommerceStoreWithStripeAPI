/** 







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



const {productName, price, productImage} = item; 


  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  
  const cart = useContext(CartContext);
  
  const list = useContext(ListContext);

  
  const cardRefs = useRef([]);
  
  // You might want to use a Local storage hook for this 
  const [selectedId, setSelectedId] = useState(null);
  
  const productId = useParams();    

  
  const product = item; 
  
  const productQuantity = cart.getProductQuantity(product.id);
  

  const listQuantity = list.getProductQuantity(product.id); 
  

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
    
    
    // console.log(id); 
    // console.log("is this logging the id ")
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
