/** 

Okay so let's just talk things through now. 


The main focus for now is getting the star rating component working and then getting the 
average rating component working. 

Once that is done then we can style each review and position all the cards and review section. 

And then add a few more finishing touches to that. 

I've decided not to move the review component to a different page. 

There are just too many things to fix and get working and the current solutions just 
don't seem to work so I'm keeping the reviews on the same page. 

I'll just tuck them away at the bottom of the page above the footer. 


Right so now I need to add the start rating feature. 










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