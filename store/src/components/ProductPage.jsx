        /** 


        Okay so let's just talk 

        things through at the moment. 


        First of all I need to get the product id for the collection id. 

        Not only so I can obtain product details but also so I can create a product review and assign 

        it the product id for the id of the collection. 


        The problem I encountered was that I tried to assign the product id after the variable was rendered. 

        This should be solved by assigning the product Id right when the user clicks on the product 
        page. 

        This is because the product id is injected in with the product page. 


        Now there's the question of hwo to get the product id and the right details immediately 
        when the user does not click on the product page but clicks on the product review section. 

        This can be solved the same way as the problem before. 

        All that needs to be done is to inject the product id into the file immediately the same 

        way this was done to display the right product details. 

        Okay now's there's something that I did not really think about before. 

        And this is the question of how do we want to display the average rating of a single product 
        without the customer having to click on the link. 

        Now this is a question that is hard to answer immediately without knowing all the details 

        but it should be solved quite easily. 


        There could be several solutions to this. 

        First of context could be used. 

        Or I could just add in the average rating in with the rest of the product. 
      
      
        Okay so that's roughly how we're going to implement things. 
        
        Just to recap. When the product is clicked to leave a review the product id. Will be injected into that 
        component. 
        
        Then this id will be used to create the collection that will later be queried when the user clicks 
        
        on the review section. 
        
        As for displaying the overall average product. 
        
        This will be calculated each time a customer leaves a review. 
        
        Now context might be the best thing for this. 
        
        
        First of all my idea of using the product detail variables was a good idea but the only problem is that 
        the product review average is something that is constantly changing. 
        
        There must be a way around this. First of all context should be able to deal with this. 
        
        But as well you could use the same technique. 
        


        
        There is one idea is to drill the props in. 
        
        This means that instead of taking the needed details from the product array I can import the 
        variable that is updated separately. 
        
        Now how would this be updated in a timely manner and how would it be kept up to date. 
        
        
        Well one idea is through the use of a useEffect hook. And another idea is that it is updated when 
        a user leaves a review. 
        
        My only question is if the user leaves a review will the variable be properly updated. 
        
        If it is not then how can we make sure it updates properly. 
        
        As always when I encounter problems like this. I can look at some examples, I can ask on forums. 
        
        I can ask bing and I can do some googling. I can look through some github examples. 
        
        And I can always try out a whole bunch of my own ideas and fully exhaust each one before trying a 
        radically different solution. 
        
        
        So just to recap for the night. With the problem of the obtaining the id for the collection. 
        
        Well we just need to inject in the product id the same way we did that using the useParams hook because we 
        set the product id to be the url path. 
        
        This needs to be set the way I set the URL path before. 
        
        Now there is a whole procedure for doing this but if you rinse and repeat the process that is how 
        
        you can inject the product id into the url. 
        
        Then once it's in the url you can use the use params hook in order to get the product id. 
        
        Once you have the product id then you can set the value of that to the collection id. 
        
        
        Okay so that's the rough idea. 
        
        The same produce can be repeated for the product review section in leaving the product review. 
        
        
         Now for updating the average product review rating. 
         
         We can just add in a context and then use a useEffect hook to keep the variable up to date. 
         
         
         Okay for the parts well that is a topic for another day. 

        


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
        // import Link from '@mui/material/Link';

        import CartProduct from '../Data/CartProduct';
        import { FaShoppingCart } from "react-icons/fa";
        import { FaList } from "react-icons/fa";
import ChatComponent from '../utilities/ChatComponent';


        function ProductPage(props) {
          
          const { id } = useParams();
          
          const { secondID } = useParams(); 
          

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

          }, [selectedId]);


          const assignRef = (element, id) => {
            if (element) {
              cardRefs.current[id - 1] = element;
            }
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
