/** 

okay so let's just talk things though at the moment 


So Now I have a navbar that needs a lot of work and I still need to integrate the 
footer and add the needed components and buttons as well as routes and get things 

working. 

Now for the main page I have the basic bare bones product cards laid out. 

As of yet they do not have any buttons or functionality but they do have 

their respective titles images and prices. 

This is a good start but what would be the ideal next step is to add a route to the 

product Landing page to each one. This way when we click on the card or image 

it would immediately take us to the product landing page where there 
would be the product image, a longer description and some other details as well as the 
buttons and functionality to buy the product immediately or add it to our basket. 

Also just a side note. 

The way the basket works is almost exactly the way we need the shopping list to work. 

So if we clone the product shopping basket functionality and then tweak and change it 

then we have our next feature which is the shopping list. 


Okay so it links to the product landing page. And obviously there are features like 
the images and the image zoom as well as product details and eventually 

one will be able to add the product to the shopping list and be able to see product reviews. 

But for now let's just focus on one thing at a time. 

What we want to do now is add the Link to the product landing page when the Card is clicked. 

The only thing I haven'nt worked out yet is how to inject the products 

details that we have clicked on into the products landing page's elements. 


We can do this with the cards but that is done just through a simple map function. 

I'll be working on that but for now let's get the product landing page integrated into this 
project. 






*/




import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card > <img src="https://images.unsplash.com/photo-1684692238677-6eac03518c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" /> </Card>
                {/* <Card.ImgOverlay> {product.img} </Card.ImgOverlay> */}
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
            </Card.Body>
        </Card>
    )
}

export default ProductCard;