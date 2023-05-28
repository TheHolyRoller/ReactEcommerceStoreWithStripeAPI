/** 

Okay so I have a card and that's a great start. 

What do I want to do now? 




*/

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'; // import the Link component from react-router-dom




import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'; 
import { StyledEngineProvider } from "@mui/material/styles";


// import {CssBaseline} from "@mui/material/CssBaseline";
import { Box } from '@mui/material';
// Used to import CARD 
// import { Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext, useRef, useEffect, useState } from 'react';



import { PRODUCTS } from '../Data/products';


// Create another function here that maps through the data object and renders out a card
// for each object 




const Cards = (props ) => {
  
  const { id } = useParams();

  // const productId = useParams(); 

  // const item = PRODUCTS.find((item) => item.id === Number(id));
  
  
  
  console.log("is item null???"); 
  // console.log(item); 
  
  
  const cart = useContext(CartContext);
  
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
  const product = props.product; 
  
  const productQuantity = cart.getProductQuantity(product.id);
  
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
      <>
      
      {/* Wrap this CARD in a LINK element to route it to the product view page */}
      <Paper   position="sticky"  className="paper" sx={{background: "#0a1929", mt: 4, color: "#ffffff"}} style={{}} >
      <Grid  sx={{m: 3, background: "#001e3b"}} style={{minHeight: "30vh", }}  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid sx={{background: "#001e3b"}}  style={{minHeight: "30vh"}}  xs={12} sm={4}>
        {/* Add in an onClick function here and add in a ref = to id  */}
      <Card  key={props.id}
        ref={(element) => assignRef(element, props.id)} // assign a ref object to the card element
        className={props.productClass}
        onClick={() => handleClick(props.id)}   sx={{ maxWidth: 345, minWidth: 300, margin: 4 }}  >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
              {/* Find out why this is not working  */}
              <Link to={`/${props.id}`}>View Details</Link> 
      
              </Button>
            </CardActions>
            
            {/* Add in the cart buttons here  */}
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
            
            
          </Card>
      </Grid>
      
          
      </Grid>
      </Paper>
                </>
        )
    
    
  

 

  
  
}

export default Cards
