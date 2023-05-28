// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to


const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Coffee",

        
        price: 4.99
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Sunglasses",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        price: 9.99
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Camera",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        
        price: 39.99
    }
];


function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };