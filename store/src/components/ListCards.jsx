/** 

Okay so I have a card and that's a great start. 

What do I want to do now? 



Okay so here's my idea for what to do about the undefined situation. 


First of all if I have the id that's a good start. If I don't have the id then my next 

task it to get the id one way or another. 


Right so if I have the id the idea is simple I import the products Array. 

And then I loop through the items array and retrieve everything from the products 

Array that matches the id from the item Array. 

Then I add the results into a new Array and then the new Array is looped through and 

all the results and data points are injected into the rendered card. 

Okay so that sounds like a pretty good plan. 





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


// import ShoppingListIcon from '@mui/icons-material/ShoppingList';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'; 
import { StyledEngineProvider } from "@mui/material/styles";


import { Box } from '@mui/material';



import { ListContext } from '../ListContext';
// import { useContext, useRef, useEffect, useState } from 'react';

import { CartContext } from '../CartContext';
import { useContext, useRef, useEffect, useState } from 'react';
import { PRODUCTS } from '../Data/products';

const ListCards = (props ) => {
  
  const { id } = useParams();

  const list = useContext(ListContext); 
  const cardRefs = useRef([]);
  
  
  // CONTEXT SEGMENT 
  const cart = useContext(CartContext);
  
  
  
  
  
  const name =  props.product;

  // A state variable to store the selected item id
  const [selectedId, setSelectedId] = useState(null);
  
  const productId = useParams();    

  const product = props.product; 
  

  const productQuantity = list.getProductQuantity(product.id);
  
  useEffect(() => {
    cardRefs.current.forEach(ref => console.log(ref));

  }, [selectedId]);

  // A function that assigns a ref object to the card element based on the item id
  const assignRef = (element, id) => {
    if (element) {
      cardRefs.current[id - 1] = element;
    }
  };

  
  const handleClick = (id) => {
    setSelectedId(id);
    console.log(id); 
    console.log("is this logging the id ")
  };


    return (
      <>
      
      
      <Paper   position="sticky"  className="paper" sx={{background: "#0a1929", mt: 4, color: "#ffffff"}} style={{}} >
      <Grid  sx={{m: 3, background: "#001e3b"}} style={{minHeight: "30vh", }}  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid sx={{background: "#001e3b"}}  style={{minHeight: "30vh"}}  xs={12} sm={4}>

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
              <Link to={`/${props.id}`}>View Details</Link> 

              </Button>
            </CardActions>

            { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In List: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => list.addOneToList(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => list.removeOneFromList(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => list.deleteFromList(product.id)} className="my-2">Remove from list</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => list.addOneToList(product.id)}>Add To List</Button>
                }
            
            
          </Card>
      </Grid>
          
      </Grid>
      </Paper>
                </>
        )
    
  
}

export default ListCards;

