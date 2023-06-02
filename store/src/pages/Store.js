import {Row, Col,} from 'react-bootstrap';
import { productsArray } from '../productsStore';
// import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../Data/products';
import Cards from '../components/Cards'; 

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


 export const handleClick = (props) => {
    
    // console.log(this.props); 

}

function Store(props) {


    console.log("is this working ")
    const { id } = useParams();
    
    // const item = PRODUCTS.find((item) => item.id === Number(id));
    const [currentId, setCurrentId] = React.useState(); 


    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Row xs={1} md={3} className="g-4">
                
               
               {PRODUCTS.map((product, index) => (
                   
                <Cards className={product.productClass} product={product}  id={product.id} key={product.id}  image={product.productImage} title={product.productName}  > 
                
                <Link>
                Learn More
                </Link>  
                
                </Cards>
               ))} 
                
            
            </Row>
        </>
    )
    
    
}

export default Store;


