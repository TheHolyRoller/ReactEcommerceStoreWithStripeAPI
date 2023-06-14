/** 

Okay so let's just talk things through now. 


First of all I have the main functionality down. 



All I need to do now is make sure that I can change the collection id dynamically 

without any upsets. 

And then I need to create a GUI and form as well as integrate everything into 
the main project. 

I also need to add in the start rating functionality as well as the functionality 

give aggregate an average overall score. 



But the plan now is to assign the id the id of the product and then fetch the collection 
using that. If that does not work completely then I'll put the collection 

query in the same file as the file that has the original value of the product id. 

so that it is more likely to be kept up to date and change with everything else. 

And if that doesn't work I'll work on a few other solutions. 

Including context top down prop drilling exporting some other variables and 
checking values and then changing each value depending on the outcome. I can also 

ask on forums and look around at examples. 

Either way there are plenty of options and each one pushed to the limit should work. 


So now there's the question of how do I create the collection. 

Well it's basically similar to how I obtain a collection. 

First of all we land on the right page and in the process the product id is captured. 

This product id is then passed onto the id of the collection we either want to create or 
add to. 


The only question I have about this method is when and how things are rendered and updated. 

Will the product id be updated and contain a value in time. That's the only question I 
have about this. 

There are also a few ways I could probably make this work if there is some trouble. 



Now there is one idea to keep in mind. 

That is assigning the product id only when an Item has been added to the list. 

This will still need some thinking through as it would also be good to view the product 

reviews even if the product is not in the list. 

One way of getting around this would be collect all the product ids into an Array and 
then once the correct product id has been found to assign it to the collection 
id. 

There are a few more ways that I could make this work and make it more efficient but 
that is the idea in general. I could also combine it with a few other techniques. 

Like functions and context. 

But let's leave it at that for now. 

In the mean time. Layout all the options and thoroughly research and exhaust each one 

before trying a radically new approach as so much time has been invested in this 
approach so far. 


Okay that is the action plan so far. 






Okay so just talk things through at the moment. The only thing left to do for the 

search bar is to Add a Reference array into the Array of Cards. 


This should be quite doable. And it's something that can be done tomorrow. 


Okay so that's great. With the Cards that is the component we can add in a ref element 

And then set it to props.ref or something similar that should work quite well. 

And if not I can try and generate a few things on Bing and ask on a few forums. 

And read and look at a bunch of examples. 


Okay so let's focus on the task at hand and keep the momentum going. 

First of all let's create the different product databases for each page. 


This means creating a js file jsut like the products file but this has different products 

And product descriptions. 

Then it will be time to create the Card pages that use the different product files. 


Once that is done then I can create a store equivalent but it is for one of the pages. 

Okay that sounds great. For now don't worry about the content that 

can be left for another day when the styling and polishing is being done. 


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

// import {  makeStyles } from "@material-ui/makeStyles";
import CssBaseline from '@mui/material/CssBaseline';

import { Box } from '@mui/material';

// import { CartContext } from '../CartContext';
import { CartContext } from '../CartContext';


import { useContext, useRef, useEffect, useState } from 'react';

// import { PRODUCTS } from '../Data/products';
import { winterPRODUCTS } from '../Data/winterPRODUCTS'; 



const WinterCards = (props ) => {
  
  const cart = useContext(CartContext);
  
  const cardRefs = useRef([]);
  
  const [selectedId, setSelectedId] = useState(null);
  
  const productId = useParams();    

  console.log("this is the product id "); 
  console.log(productId); 
  
  const product = props.product; 
  
  const productQuantity = cart.getProductQuantity(product.id);

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

    
  };

  

  

    return (
      <>

      {/* Wrap this whole thing in a div */}
      {/* <div className={classes.root} ></div> */}
      
      <CssBaseline />

      <Paper   position="sticky"  className="paper" sx={{background: "#0a1929", mt: 4, color: "#ffffff"}} style={{maxWidth: "99vw"}}  >
      <Grid  sx={{m: 3, background: "#001e3b"}} style={{minHeight: "30vh", maxWidth: "90vw" }}  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid sx={{background: "#001e3b"}}  style={{minHeight: "30vh"}}  xs={12} sm={4}>

      <Card   key={props.id}
        ref={(element) => assignRef(element, props.id)} // assign a ref object to the card element
        className={props.productClass}
        onClick={() => handleClick(props.id)}   sx={{ maxWidth: 345, width: 300, margin: 4 }}  >
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

export default WinterCards
