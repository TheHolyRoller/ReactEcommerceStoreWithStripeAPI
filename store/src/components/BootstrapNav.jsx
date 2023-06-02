/** 

Okay so want we want now is to get the list count. 

We can get the list count by using the same code that we use to get the products count. 

Then we render something is there are no products in the list. 

Now we get the products count by importing in the List context. 

Now from the list context we have the items variable. This items variable 
is casted to a Array type and it obtains it's contents from the state variable that 
is set to the products that are added to the list. 

These products are added to the list within the file and this is accomplished with functions 
within this file along with the use of event listeners. 

The way that the state is set for the state variable that passes it's contents to the items 
array is through the use of a custom hook that in turn uses two native react hooks. 

It also uses a window interface with it's accompanying api. 

And it uses the local storage to make the state of the variable which is in itself a 
an Array which is then converted to a JSON object which is then in turn converted 
to a string using the stringify function. 


Now we have the state variable and it passes it's value onto the items array. 
Now this items array is an intrinsic part of the context of file. 

This way we can import and then use the useContext hook and assign it to a variable. 

This will give us the complete context of that context file. 


This means that we can now access the functions and data structures that make up that 
particular context. 

We can do this by using the dot operator. 

This things are nested then we just reach into that nesting with the another dot operator 
on the original thing that we are trying to access. 



Okay so that's great. 

So now what we want to do is take the list product and make sure that it is all up to scratch. 

And we want to import the correct things into it. 

Then we want to take the list and import in the context and everything else that we need. 

Once that is done we want to access the item Array from our List Context. 

Once this has been assigned to a variable then we want to create a place in this file 
to render out the JSX code for our List Item. 

The way we do this is by taking the variable that has been assigned the item array 

and we map through it. 

Within the Map render section we take our imported list item functional component. 

And we assign it the necessary props. This could be item id and a few other things. 

These props will come from our context. 

Now once we have assigned the List Item component our props it will then have access to 
the props it needs within the native file of the functional component. 

Once this has been done then we can work on getting the list fleshed out. 




*/


import Container from 'react-bootstrap/Container';
import {Button,  Modal} from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import SearchBar from './SearchBar';
import List from './List';


import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa";


import { FaMdiAccount  } from "react-icons/fa";
import PersonIcon from '@mui/icons-material/Person';
// import { FaList } from 'react-icons/fa';    
import ListIcon from '@mui/icons-material/List';

import { CartContext } from "../CartContext";
import CartProduct from '../Data/CartProduct';

import { useState, useContext, useEffect, useRef } from 'react';



function CollapsibleExample() {
    
    
    
    const cart = useContext(CartContext);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const checkout = async () => {
    // This was 4000
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }
    
    

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    
    // console.log(cart.items); 
    // console.log("these are the cart items "); 

    
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      
        <Navbar.Brand href="/" style={{marginLeft: "4vw"}} >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="" style={{display: "flex", justifyItems: "center",  width: "100%",  margin: "auto"}}>
            <Nav.Link href="/" style={{marginLeft: "10vw", marginRight: "2vw"}} >Features</Nav.Link>
            <Nav.Link href="/cancel" style={{marginRight: "3vw"}} >Outdoor</Nav.Link>
            <Nav.Link href="/cancel" style={{marginRight: "3vw"}} >Autumn</Nav.Link>
            <Nav.Link href="/cancel" style={{marginRight: "3vw"}} >Mountain Gear</Nav.Link>
            <Nav.Link href="/" style={{marginRight: "3vw"}} >Winter </Nav.Link>
           

           
          </Nav>
          <Nav>

            <Nav.Link href="#" style={{marginRight: "1vw"}} >  
            {/* <FaShoppingCart style={{fontSize: "1.5rem"}}/> */}
            <Navbar.Collapse className="justify-content-end">
                    <div onClick={handleShow} style={{position: "relative"}} ><FaShoppingCart style={{fontSize: "1.5rem"}} /> 
                    
                    {productsCount > 0 ? 
                    
                    <>
                    <div style={{position: "absolute", top: "5%", left: "104%"}}> ({productsCount}) </div>
                    
                    </>
                    
                    : 
                    <div></div>
                        }   
                    </div>
                </Navbar.Collapse>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>

            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {/* Add in The Icon here  */}
            <FaSearch style={{fontSize: "1.28rem"}} />

            </Nav.Link>
            <Nav.Link eventKey={2} href="/profile" style={{fontSize: "0rem"}} >
            <PersonIcon style={{fontSize: "2.1rem"}} />
            
      
            </Nav.Link>
            <Nav.Link eventKey={2} href="/list" style={{fontSize: "0rem"}} >

            <ListIcon style={{fontSize: "2.1rem"}} />
            
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;