
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

Okay so let's just talk through what I'm doing now. 

First of all I've fixed the issue of the items in the basket being ephemeral. 

This was done by using the built in local storage on the browser. 

We can tap into this local storage on the browser by creating a custom hook. 

This custom hook taps into the window api and allocates memory into the local 
storage by use of the useState hook. This useState hook has a default starting value 

and then when the useEffect hook it will update the state in this variable when upon 

render, rerendering and when the variables change that trigger the useEffect hook. 

Now in order to pass in more than one value or to pass in an Array into Local Storage 


we need to turn it into a JSON object and then Stringify that JSON object in order to 
turn it into a string so that local storage can hold and later on retrieve it. 


Okay so in order to set the value of the local storage using the useState hook we 

first need to get that value and if it has not been set already we need to get the default 
value of that. 

It is important to note that the default value is set within the external file that uses 
the useLocalStorage custom hook. 

This means that the hook will not work unless the proper default values are entered in 

within the file that uses the useLocalStorage custom hook. 

In order to get the value from local Storage and update it we use the localStorage.getItem 

built in function from it's api. 

It is important to include some defensive and error catching code here in case there is 
no value set and there is only the default value. 

So in this case we use the if else shorthand in JavaScript making use of the ? : operators. 

What follows the question mark is the code that will be executed is the first condition 
or variable is truthy and then what follows the colon is what will be executed as a fallback 
and it will be executed if the first condition or variable is falsy. 


Okay so now we have the custom hook that gives us access to the local 
storage within the browser. 

What I want to do now is extend the functionality for the custom hook for the shopping list. 

*/


import { createContext, useState } from "react";

import { productsArray, getProductData } from "./Data/products";


import  useLocalStorage  from './hooks/useLocalStorage'; 

import useSessionStorage from './hooks/useSessionStorage'; 



export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {

    const [cartProducts, setCartProducts] = useSessionStorage( [], []);
    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

    function getProductQuantity(id) {
    
        // Why this throwing an error and saying it's not a function 
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }


    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context