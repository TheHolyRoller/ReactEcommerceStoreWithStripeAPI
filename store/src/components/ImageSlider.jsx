/** 

Okay so let's just talking things through at the moment. 

So there is a lot more work to get the payment element done. 

And there is more work to get it integrated into the main project. 

But that is work for another day when everything will be integrated and 

all the different ui components and the functional api components have all the 


functionality that they needs as well as the styling and responsiveness. 
Then it will be time to integrate them. 


Okay but now Let's just work out what what we want the product page to look like. 
well first of all we have the navbar and the footer. 


Then we have our header section that will be an image slider. 


Then after that we have our line of cards then composite cards. 


Then after that we have our multi item image slider then we have some more rows of 
that and then we have the footer. 

Okay that's great. 


Now the task is to get the image slider working properly. Get the styling and dimensions 
right. 




*/




import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Container, Button } from '@mui/material'


function ImageSlider(props)
{
    var items = [
        {
            name: "Random Name #1",
            
            description: "Probably the most random thing you have ever seen!", 
            url: "https://images.unsplash.com/photo-1684457718008-d561d76dfbb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1200&h=300&q=60"
        },
        {
            name: "Random Name #2",
            description: "Hello World!", 
            url: "https://images.unsplash.com/photo-1628735152437-3064a6b2cc99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1200&h=300&q=60"
        }
    ]

    return (
    
    
    <Container position="sticky"  style={{width: "100vw",  backgroundColor: "blue"}}  sx={{width: 100}} >
        <Carousel position="sticky"   >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
                
            }
        </Carousel>
            </Container>
    )
}

function Item(props)
{
    return (
        <Paper  style={{width: "100vw", backgroundColor: "orange" }} >
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <div>
            <img src={props.item.url}/>
             
            </div>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}


export default ImageSlider; 
