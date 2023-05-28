
// import Paper from '@mui/material/Paper';


// import Container from '@mui/material/Container';

import Masonry from '@mui/lab/Masonry';



import { AppBar, Box, List, ListItem, Toolbar } from "@mui/material";
import { sizing } from '@mui/system';

import ImageSlider from './ImageSlider';




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
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
import Cards from './Cards';
import CompositeCard from './CompositeCard';

import '../Styles/ProductPage.css'; 
import NPMCarousel from './NPMCarousel';

import CardRenderer from './CardRenderer'; 
import Example from './Example';
import { Container } from 'react-bootstrap';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



/** 

So it just works right now without the overflow being hidden. But there is still a

scroll bar. 

Now everything is completely off to the left with overflow being hidden and the right 
part is partial cut off. 

To fix this left margin will need to be added. 




*/


function ProductPage() {
  
  
  return (
    <>
    <Paper style={{ width: "100vw", margin: "0", padding: "0"}}  className="paper" sx={{background: "#0a1929", mt: 4, color: "#ffffff"}}    >
    <h1 style={{ backgroundColor: "blue", }} >Hi </h1>
    </Paper>
    
        </>
 
  )
}

export default ProductPage
