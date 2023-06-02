
/** 

Okay so let's just talk things through. 


First of all the features has a basic line of functionality. 

They do not all look great but for the most part they work. 

The main things to do now are the shopping list. 

Sort out the fact that the image covers the checkout on the product landing
page and then do the customer review feature. 

Once that's done it's just the styling left to do. 

Okay that's great. 


Now the main task is to create the shopping list. 


Now what is the shopping list. 

Well the shopping list is basically a shopping basket that has been adapted. 



There needs to be a context for the shopping list that wraps around the app. 

Okay so there's CartContext

And then there's card product that need to be cloned and then altered slightly. 







*/


import { createContext, useState } from "react";
import { productsArray, getProductData } from "./Data/products";



// Import the useListStorage custom hook here 


// Why is it saying this is not a function 
import useListStorage from "./hooks/useListStorage";
import useLocalStorage from "./hooks/useLocalStorage";



export const ListContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToList: () => {},
    removeOneFromList: () => {},
    deleteFromList: () => {},
    getTotalCost: () => {}
});

// Change this to List provider 
export default function ListProvider({children}) {
    const [listProducts, setListProducts] = useListStorage([], []);

    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

    function getProductQuantity(id) {
        const quantity = listProducts.find(product => product.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToList(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setListProducts(
                [
                    ...listProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setListProducts(
                listProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
            console.log("These are the list product")
            console.log(listProducts); 
            
        }
    }

    function removeOneFromList(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
        
        // See why this is not defined 
            deleteFromList(id);
        } else {
        // Change these to list Products 
            setListProducts(
                listProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromList(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        
        // Change these to list Products 
        setListProducts(
            listProducts =>
            listProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }


    function getTotalCost() {
        let totalCost = 0;
        // Change these to list items 
        listProducts.map((listItem) => {
            const productData = getProductData(listItem.id);
            totalCost += (productData.price * listItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: listProducts,
        getProductQuantity,
        addOneToList,
        removeOneFromList,
        deleteFromList,
        getTotalCost
    }

    return (
        <ListContext.Provider value={contextValue}>
            {children}
            
        </ListContext.Provider>
    )
}

// export default ListProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context