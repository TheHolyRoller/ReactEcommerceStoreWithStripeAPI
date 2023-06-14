// import product1 from "./assets/products";
import product1 from '../assets/products/Bag.jpg'; 

import product2 from '../assets/products/BlackShoe.jpg'; 
import product3 from '../assets/products/BlueHat.jpg'; 
import product4 from '../assets/products/BrownHat.jpg';
import product5 from '../assets/products/Hat.jpg'; 
import product6 from '../assets/products/RedHat.jpg'; 
import product7 from '../assets/products/Sunglasses.jpg'; 
import product8 from '../assets/products/TissotWatch.jpg'; 


// ALL THESE IDS ARE FROM THE TUTORIAL EXAMPLE THEY ARE IDENTICAL 



export const winterPRODUCTS = [
  {
    id: "price_1NC2XCECwV7seoblbhR4X48B",
    productName: "IPhone",
    price: 999.0,
    productImage: product1,
    productClass: "Iphones"
  },  
  {
    id: "price_1NC2WoECwV7seoblAvg1TCWn",
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: product2,
    productClass: "Macs"
    
    
  },
  {
  
    id: "price_1NC2WQECwV7seoblJcR9eEo2",
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: product3,
    productClass: "Cameras"
    
  },
  {
    id: "price_1NC2VUECwV7seoblE4HmCCv5",
    productName: "WLS Van Gogh Denim Jacket",
    price: 228.0,
    productImage: product4,
    productClass: "Shoes"
    
  },
  {
    id: "price_1NC2ULECwV7seoblVFQrkjtz",
    productName: "LED Light Strips",
    price: 19.99,
    productImage: product5,
    productClass: "Lights"
    
  },
  {
    id: "price_1NC2TlECwV7seoblKLcqkZyo",
    productName: "SPECTRUM LS TEE",
    price: 68.0,
    productImage: product6,
    productClass: "Shirts"
    
  },
  {
    id: "price_1NC2SAECwV7seoblsUpYIjNd",
    productName: "AUTO SERVICE SHIRT by GOLF WANG",
    price: 120.0,
    productImage: product7,
    productClass: "Jackets"
    
  },
  {
  
    id: "price_1N9QWMECwV7seobltcqPgIAW",
    productName: "DON'T TRIP UNSTRUCTURED HAT",
    price: 40.0,
    productImage: product8,
    productClass: "Hats"
    
  },
];



// Add in the get product data function here 

function getProductData(id) {
  let productData = winterPRODUCTS.find(product => product.id === id);

  if (productData === undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
  }

  return productData;
}

export {  getProductData };