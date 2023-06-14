/** 




*/

import './App.css';

// import BasicExample from './components/BasicExample'; 


import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";

import { Card, Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import {Hidden, ListItem, Paper } from '@mui/material'



import NavbarComponent from './components/Navbar'; 

import Cancel from './pages/Cancel';
// import Store from './pages/Store';
import Success from './pages/Success';



import Footer from './components/Footer'; 
import BootstrapNav from './components/BootstrapNav'; 


import { PRODUCTS } from './Data/products';

import Profile from './components/Profile';

// import Experiment from 

import ProductPage from './components/ProductPage';
import CardList from './components/CardList';

import { selectedCardId } from './components/CardList';
import CardDetails from './components/CardDetails';
import SearchBar from './components/SearchBar';
import Page from './components/Page';


import ProductCard from './components/ProductCard';

import ListProvider from './ListContext';
import CartProvider from './CartContext';
import ChatComponent from './utilities/ChatComponent';
import ReivewPage from './components/ReivewPage';
import Rating from './components/Rating'; 

// import WinterStore from './pages/WinterStore'; 
import WinterStore from './pages/WinterStore'; 

import SearchInput from './components/SearchInput';
import Signup from './components/Signup';
import BingExample from './components/BingExample';
// import SearchContainer from './components/SearchContainer';

function App() {
  
  let productId = useParams(); 

  const product = PRODUCTS.find((product) => product.id === productId); 
  
  return (
  <>
  
  
    {/* <ListProvider>
    <CartProvider>
        <BootstrapNav></BootstrapNav>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store product={product} />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="list" element={<List/>}/>
            
            
            <Route path=":id" element={<ProductPage product={product}  />}>
              
              
            </Route>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </CartProvider>
    </ListProvider> */}
    
    
    <Container>

      {/* <BasicExample/> */}
      <BingExample/>
      
    </Container>
    
    
  </>
  
  );
}

export default App;
