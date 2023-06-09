import {Row, Col,} from 'react-bootstrap';
import { productsArray } from '../productsStore';
// import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../Data/products';
// import Cards from '../components/Cards'; 

import WinterCards from '../components/WinterCards'; 




// import {Link} from 'react-router-dom'; 
import { useParams, Link } from 'react-router-dom';



// import Cards from '../components/Cards';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { selectedCardId } from '../components/CardList';


function WinterStore(props) {
    
    const [currentId, setCurrentId] = React.useState(); 
    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Row xs={1} md={3} className="g-4" style={{ maxWidth: "99.9vw", marginLeft: "0.1vw", outline: "4px solid lime"}} >
               
               {PRODUCTS.map((product, index) => (
                <WinterCards className={product.productClass} product={product}  id={product.id} key={product.id}  image={product.productImage} title={product.productName}    > 
                
                {/* <Link>
                Learn More
                </Link>   */}
                
                </WinterCards>
               ))} 

            </Row>
        </>
    )
    
    
}

export default WinterStore;


