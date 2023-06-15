/** 

Okay so let's just talk things through. 


There is of course a lot of styling and polishing and design work that 
needs to be done to the website. 


This needs to be done after everything is functioning correctly, however, 


So the plan is now is to get the firebase and contact api working. 


Then once that is done I can start on fixing the cards. 



Then once the cards are fixed I can then move onto. 





List of polishing Tasks: 


1. Fix cards on smaller screens

2. Get firebase contact and email signup work 

3. Search bar on mobile 

4. Image covering checkout 

5. Content for different pages 

6. Footer and Routes 


7. Images to the side of the product image 

8. Product Landing Page layout 


9. Title and Product Image 

10. User profile 

11. Product ids 

12. Home button icon 

13. Footer layout and appearance 

14. Nav & page styling

15. Format Currency and price 






*/





        import ImageMag from '../components/ImageMag'; 
        import { useParams, Link } from 'react-router-dom';


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
import ChatComponent from '../utilities/ChatComponent';


        function ProductPage(props) {
          
          const { id } = useParams();
          
          console.log("is the id defined"); 
          console.log(id); 

          const item = PRODUCTS.find((item) => item.id === (id));
          
          console.log("This is the ITEM I DON'T KNOW WHY IT'S NOT WORKING ON THE OTHER PAGE"); 
          console.log(item); 

          
          const {productName, price, productImage} = item; 
          
          const [show, setShow] = useState(false);
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          
          
          const [flag, setFlag] = useState(false);


          const cart = useContext(CartContext);
          
          const list = useContext(ListContext);

          
          const cardRefs = useRef([]);
          
          // You might want to use a Local storage hook for this 
          const [selectedId, setSelectedId] = useState(null);
          
          const productId = useParams();    
 
          const product = item; 
          
          const productQuantity = cart.getProductQuantity(product.id);
          

          const listQuantity = list.getProductQuantity(product.id); 
          const reloadPage = () => {
            window.location.reload();
          };
        
          // A function that logs hello world to the console
          const logHelloWorld = () => {
            console.log("Hello world");
          };
        
          // A function that contains the logic to run the code
          const runLogic = () => {
            // If the flag is false, set a timeout to reload the page after 100 milliseconds and set the flag to true
            if (!flag) {
              setTimeout(reloadPage, 100);
              setFlag(true);
            }
            // Otherwise, log hello world to the console
            else {
              logHelloWorld();
            }
          };
        
          // Add an event listener to run the logic function when the window loads
          window.addEventListener("load", runLogic);
          
          
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
              <ChatComponent/>

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
            

            
            <div id="CTASectionContainer">

            
            <div id="productButtonSectionContainer">
            
            <div id="productButtonSection">
            

            <div id="productButtonContainer" >
            
            
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

            
            </div>
          
          );
        }

        export default ProductPage
