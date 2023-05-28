/**
Okay so let's just workout what we need to do. 

First of all we have a basic container for the footer. 

Within this container we can put the needed links. 

The main questions remaining are. 

1. Can you put functional firebase components in and if so how do we do that. 

2. Will the footer increase in height on smaller screens when it needs to. 

3. How should the footer be designed

4. How should we arrange all the buttons and what do we use to do this and keep things responsive. 




First of all on the design of the footer. 


We need a footer that has minimal buttons. Because the more buttons the 
more work there will be. 

So First of all I have found the example that I'm looking for. 

It has two main sections. 

Although it would probably we good to add in a third section with some category Links. 



The first column has starts off with the header and then some useful links such as 

the privacy policy and a few other bits of information such as terms and conditions. 

Then There is the next row within this first column and that is for the social media 
section. 
We have our social media links here 


Then we have the copyright information here and payment options. 


Then we have the second and final section in the example. 

This is the email sign up section. 

It's starts of with the Call to Action to sign up to the newsletter with a 

promise of 10% off. 

Then right below that is the input field for the email and then right below that 
we have the button that can be pressed to sign up to the newsletter. 

This is the same size as the input field as has the accent color of the color pallette. 


Then right below the button there is just some small text describing more about what 
the newsletter will contain. 


Then in my version of the Footer I will of course add in the material UI color scheme 

but I will also add in a third column. 

This column will contain some buttons that lead to different products and pages. 

Okay that's a good start. 



Next I need to figure out how I'm going to get this onto the page. 



Well first of all I have the example of how to get things in order with the Header/Navbar. 

I can do a similar thing here but instead of displaying the links inline I can display them 
as block elements. 


Then there is the other question of how do I make the footer responsive. 

Well first of all I can make two different footers. 

Now the mobile footer can be comprised of a grid system. 


Now we could create a two different footers and display them based on media queries. 

That could be an option or we could create one footer. With the mobile design. 

Then we could add in some media queries to alter that grid. 

First of all let's go with the second option. 

Let's walk through how we would implement this. 

Well first of all we would need to import Grid from material UI. 


Then we're going to need to plan out how many columns and rows we need. 

Well first of all for the mobile version we're going to need more rows then we have columns. 

This means we'll have one column and multiple rows. 


Okay so let's just talking things through now. 

So there is already some text at the moment. Basically what we need to do now is 
add some more text in to create some content and then later on we can add in the event 
listeners routing and effects. 

But for now we need to structure things correctly in order to create the footer components. 

So look at the example and seeing how things should be structured and taking 
into account the other details. We need to add in around 6 buttons. 


So these would be 6 lines spaced apart with some basic headline text. 

Then We can add in the Section from the example. 

Okay so let's start with adding in the headline. 



Okay so let's just talk things through and get to grips with how to solve this problem. 


The problem is that when integrating and creating the layouts and pages different 


components that are part of the core layout as well as the navigation for the 
website do not integrate properly. 

Not only do they not integrate properly but they also have a tendency to 
overlap and jump around on the page. 


There are also issues with positioning them on the page and it is often the case 
that absolute positioning needs to be used just to place them roughly where 
they should go. 

This is a major problem and trying out all the regular CSS tricks as well as shifting 
the nesting and order of elements and where they are rendered in the file 
structure does not seem to work at all. 



Okay so there are a few solutions on the web and most of them are quite impractical. 

But the truth is that a lot of people have created website and they don't seem 
to have such a nightmare solution on their hands and they usually don't seem to need to 
use 50 different media queries as well as a couple of hundred lines of CSS to 
tweak the padding margin and positioning of elements in order for them to be 
positioned correctly on the page on most screen sizes. 

Okay so there must be a better solution. 

The thing is I need to find that solution and properly learn and research it. 

Then I can begin applying in my projects and it will save huge amounts of time 
and effort. 


First of all there is the idea of using the children props element. 

And then having a Layout component that renders it's child components. 

Then within this Layout component above and below the child components. These
places will be reserved for the navbar and footer. 

This hopefully will mean that we avoid the dreadful problems of overlap and positioning 
and well as spacing. 


If this is not the case, however, then using Material UI Grid will be another option. 

That must be looked into. 

With the grid we can place items explicitly where we want them. 

And because this is a component library and CSS framework using the different containers 
and components that MUI provides will hopefully also help reduce the layout shift 
and positioning issues that could arise. 

Then if that does not work then what you do is you sit through some long 
videos of long projects like people making websites from scratch and e-commerce websites 
and make note of their file structure, how they do routing, and how they create 
page layouts and how they render child elements. 

This way you can see first of all that they do not struggle that much with layouts and 
integration and you can see the different ways and methods that they use to avoid 
these issues even if they are implicit in their application. 



That is basically the plan on how I'm going to overcome this vile problem. 

Then  you can also watch a whole bunch of Youtube videos and read a whole bunch 
of articles on the subject as well as ask some questions on coding forums. 


This is basically how you will overcome the problem. 

For now you need to create a detailed plan on what the website must 


look like as well as the different pages and the UI components. 

Then you can finish off each component and integrate some of the functional components 

into the composite components. 

Then you can begin to think about wrapping things up and putting the site on github 

pages. 


*/




import {  Container, Typography } from "@mui/material";

import * as React from 'react';
import {  List, ListItem, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { spacing } from '@mui/system';


import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
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
import Nav from 'react-bootstrap/Nav';

// import {CssBaseline} from "@mui/material/CssBaseline";
import { Box } from '@mui/material';


import { IconContext } from "react-icons";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Signup from "./Signup";


const Links = [
    { titlePage: "Client", path: "/" },
    { titlePage: "Product", path: "/product" },
    { titlePage: "Settings", path: "/settings" },
  ];
  
  
//   Import the stylesheet here '


// This is clashing with the stylesheets 
// import '../Styles/Footer.css'; 

  //  import the CSS style module here 
  
  

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
  
//   Create the theme here 
  
  


function Footer() {
  return (
  <>
  
  
  {/* Add this style component into a style variable and connect it to a conditional meida  query  */}
    <Paper style={{ width: "100vw", marginBottom: "-20vh",   outline: "4px solid lime", marginTop: "43vh",  padding: "0"}}  className="paper" sx={{background: "#0a1929", color: "#ffffff"}}    >
      <Grid  sx={{m: 2, background: "#001e3b"}} style={{minHeight: "30vh"}}  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid sx={{background: "#001e3b"}}  style={{minHeight: "30vh"}}  xs={12} sm={4} >
          <Item sx={{background: "#001e3b", color: "#ffffff"}}   style={{minHeight: "50vh"}} >

          <ButtonBase style={{margin: "0 auto"}} >
           <h2>
            Categories
           </h2> 

          </ButtonBase>
          <Grid item sm container >
          

          <Grid item xs container direction="column" spacing={2} >
          <Grid sx={{color: "#9ca6b1"}} item xs>
          <Typography  gutterBottom variant="subtitle1" component="div" style={{fontSize: "1.2rem"}} >
              
              {/* Add in a nav Link here with the proper path  */}
                
                <Link href="/cancel" style={{textDecoration: "none", color: "#9ca6b1"}} >

                OutDoor Gear 
                
                </Link>
            
                {/* Standard license */}
              </Typography>
              <Typography variant="body2" gutterBottom style={{fontSize: "1.2rem"}} >
                 
                 <Link href="/cancel" style={{textDecoration: "none", color: "#9ca6b1"}} >
                  
                 Dress Shoes
                
                </Link>
                 
                {/* Full resolution 1920x1080 • JPEG */}
              </Typography> 
              <Typography variant="body2" style={{fontSize: "1.2rem"}} >
                <Link href="/cancel" style={{textDecoration: "none", color: "#9ca6b1"}} >
                  
                Womens Clothing 
                
                </Link>
                
                
              </Typography>
            
          </Grid>
            
            
          </Grid>
          </Grid>
          
          </Item>
        </Grid>
        <Grid xs={12} sm={4} >
        <Item sx={{background: "#001e3b", color: "#9ca6b1"}}   style={{minHeight: "50vh"}} >

          <ButtonBase style={{margin: "0 auto"}} >
           <h2 style={{color: "#ffffff"}} >
           Useful Links 

           </h2> 

          </ButtonBase>
          <Grid item sm container >
          
          {/* Add in the next grid container here  */}
          <Grid item xs container direction="column" spacing={2} >
          <Grid item xs  >
          <Typography gutterBottom variant="subtitle1" component="div" style={{fontSize: "1.2rem"}} >

            Privacy Policy 
            
              </Typography>
              <Typography variant="body2" gutterBottom style={{fontSize: "1.2rem"}} >
                Contact Us! 
                </Typography> 
              <Typography variant="body2" gutterBottom style={{fontSize: "1.2rem"}} >
                Terms & Conditions 
              </Typography> 
              
          </Grid>
            
            
          </Grid>
          </Grid>
          
          <ButtonBase style={{margin: "0 auto", color: "#ffffff"}} >
           <h2  >
            Social Media 
           </h2> 

          </ButtonBase>
          <Grid item sm container >
          
          {/* Add in the next grid container here  */}
          <Grid item xs container direction="column" spacing={2} >
            <Typography style={{marginTop: "0.6rem"}} >
            
            {/* Wrap each one of these icons in Links  */}
            
            <a href="facebook.com/" > 
            <FaFacebook style={{fontSize: "1.7rem", color: "#66b2ff", marginRight: "1rem", display: "inline"}}/>
            </a>
            <FaTwitter style={{fontSize: "1.7rem", color: "#66b2ff", marginRight: "1rem", display: "inline"}}  />
            <FaInstagram style={{fontSize: "1.7rem", color: "#66b2ff", marginRight: "0rem", display: "inline"}} />
            </Typography>
          </Grid>
          </Grid>
          
          
          </Item>
        </Grid>
        <Grid xs={12} sm={4} >
          <Item sx={{background: "#001e3b", color: "#ffffff"}}   style={{minHeight: "50vh"}} >
          <ButtonBase style={{margin: "0 auto"}} >
           <h2>
            Subscribe to our newsletter and get 10% off
           </h2> 

          </ButtonBase>
           <Signup/>
            {/* Add in the Grid Container and Sub Grid containers here  */}
            <Grid item  container sx={{}} style={{}}   >

            </Grid>
            
            
          </Item>
        </Grid>
      
      </Grid>

          </Paper>
  </>
  )
}

export default Footer
