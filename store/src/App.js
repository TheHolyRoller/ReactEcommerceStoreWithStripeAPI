

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import NavbarComponent from './components/Navbar';
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";

import { Card, Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import {Hidden, ListItem} from '@mui/material'



import NavbarComponent from './components/Navbar'; 

import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import Cards from './components/Cards'; 
import List from './components/List'; 


import Footer from './components/Footer'; 
import BootstrapNav from './components/BootstrapNav'; 


import { PRODUCTS } from './Data/products';

import Profile from './components/Profile';


import ProductPage from './components/ProductPage';
import CardList from './components/CardList';

import { selectedCardId } from './components/CardList';
import CardDetails from './components/CardDetails';
import SearchBar from './components/SearchBar';
import Page from './components/Page';
import BasicExample from './components/BasicExample';

import SearchSuggestion from './components/SearchSuggestion'; 
import ProductCard from './components/ProductCard';


// Import the list context here 
// import CartProvider from './CartContext';

import ListProvider from './ListContext';
import CartProvider from './CartContext';



function App() {
  
  console.log({selectedCardId}); 
  console.log()
  
  const productId = useParams(); 
  
  // Add in map function here to find the productID 
  const product = PRODUCTS.find((product) => product.id === productId); 
  
  
  console.log(product); 
  
  return (
  <>
  
    <ListProvider>
    <CartProvider>
        <BootstrapNav></BootstrapNav>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store product={product} />} />
            {/* <Route index element={<List product={product} />} /> */}
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="list" element={<List/>}/>
            
            
            <Route path=":id" element={<ProductPage product={product}  />} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </CartProvider>
    </ListProvider>
    
    
    {/* <Container> */}
    
    {/* <ProductPage/> */}
    {/* <BasicExample/> */}
    {/* <Page/> */}
    {/* <SearchBar/> */}
    
    {/* <Page/> */}
    
    {/* <Store/> */}
    
    {/* <SearchSuggestion/> */}
    
    {/* <ProductCard/> */}
    
    {/* <List/>
    <ListItem/> */}
      
    {/* </Container> */}
    
    
  </>
  
  );
}

export default App;
