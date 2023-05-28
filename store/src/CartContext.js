
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

// import { useLocalStorage} from './hooks/useLocalStorage'; 
import  useLocalStorage  from './hooks/useLocalStorage'; 
// import { useLocalStorage } from "./hooks/useLocalStorage";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {


    const [cartProducts, setCartProducts] = useLocalStorage( [], []);
    // const [value, setValue] = useLocalStorage("key", [])
    
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