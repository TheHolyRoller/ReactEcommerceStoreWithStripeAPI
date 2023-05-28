import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import { styled, alpha } from '@mui/material/styles';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from 'react-bootstrap';

import Footer from '../Navigation/Footer'; 


// Import the static assets here 
import BalckMer from '../assets/BlackMerc.jpg'; 

import RedMerc from '../assets/BlackMerc.jpg'; 
import YellowCar from '../assets/YellowCar.jpg'; 
import Mustang from '../assets/Mustang.jpg'; 
import { Header } from '../Navigation/Header';


// This might be clashing with the styles 

// import '../Styles/CompositeCard.css'; 


// Add in the module import here 




export default function CompositeCard() {
  return (
  <>
  {/* Modify the classes for css modules  */}
    <Paper className="compositeCardContainer"   sx={{paddingTop: 3, width: 444,  paddingBottom: 3, paddingRight: 3, paddingLeft: 2.27}}>
      
      
    <ImageList sx={{ width: 400, height: 390 }}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
          draggable={true}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
            />
        </ImageListItem>
      ))}
    </ImageList>
      </Paper>
    <Paper className="compositeCardContainer"   sx={{paddingTop: 3, width: 444,  paddingBottom: 3, paddingRight: 3, paddingLeft: 2.27}}>
      

    <ImageList sx={{ width: 400, height: 390 }}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
          draggable={true}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
            />
        </ImageListItem>
      ))}
    </ImageList>
      </Paper>

  </>
  );
}

const itemData = [
  {
      
// Edited URL 
    // https://images.unsplash.com/photo-1684395521046-fe664a85a9e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8


// Un-edited photo url 
// https://images.unsplash.com/photo-1684357766172-3d6184d95c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60

// Original photo 
// https://images.unsplash.com/photo-1551963831-b3b1ca40c98e
    img: BalckMer,
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  }
  

];