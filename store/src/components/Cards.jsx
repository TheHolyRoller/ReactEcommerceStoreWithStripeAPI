

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


import CssBaseline from '@mui/material/CssBaseline';

import { forwardRef } from "react";


import { CartContext } from '../CartContext';


import { PRODUCTS } from '../Data/products';



import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { scrollToComponent } from "react-scroll";




import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';



 const CardComponent = forwardRef(function(props, ref) {
  // export const CardComponent = forwardRef((props), ref) => {

  console.log("THIS IS THE PASSED IN REF ")
  console.log(ref); 
  

  const { image, title, content } = props;

  
  
  
    return (
    
      <>
      <CssBaseline />
      <Paper  ref={cardRefs}  position="sticky"  className="paper" sx={{background: "#0a1929", mt: 4, color: "#ffffff"}} style={{maxWidth: "99vw"}}  >
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
            
            {/* <> */}
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
            
                  {/* </> */}
            
          </Card>
      </Grid>
          
      </Grid>
      </Paper>
                </>
        )
    
      });