/** 

Okay so let's just talk things through. 


// At the moment I have the two things t I need. 

The first one being an image Carousel and the second one being an image zoom component. 


Now I need to go about combining them. 


First of all I need to match up the same images. 


Okay so let's just take stock of things. 

So I've had a crack at trying to combine two components. 


It has not gone so well in fact it is pretty much impossible. 

But I have another idea. 

I don't need to have an image Carousel to begin with. But if I really want 
to add one in I can create my own one. 

// First of seeing t using image urls from the internet just won't cut it. It is 
impractical. 


Next using objects won't work particularly well either. 

This is because the imported assets become unreachable when the Array is turned. 

Into an object to support this. 

Then even when template literals are used as well as dot operators things don't work 
out when the object is mapped through. 

So we need to find a work around at least for now. 


// So the work around t I propose is to have a state variable and to set it 
to one of the assets. 

So we can the image zoom image to this and when we click on one of the buttons. 

// A function is triggered. And this function works out w button was clicked and 
sets the state variable to the right asset. We could even take this a step further by adding in a vertical 
column of images. 

// Each image would have it's own event listener so t when the user would click on it 
a function would be triggered. 

This function would be a very small function and would only set the state of a 
state variable to a set value. 

Then the container of the entire image row would also contain an onClick event 
// listener. This event listener would trigger a function t would then check the 
value of the state variable. 

Because the user has already changed the value of the state variable to the correct 
value the correct check would result in a truthy value. 

This would result in the correct block of code being triggered. 

This would result in the state variable used to control the current image for the 
// image zoom component being changed to the same image t the user has clicked on. 

There might be a few edge cases to be aware of as well as order of operations 
and rendering issues but for the most part this very hacky work around might work. 


*/

import { useState, useRef } from 'react';
import { useParams } from 'react-router';

import ReactImageMagnify from 'react-image-magnify';

import {PRODUCTS} from '../Data/products'; 



import S from '../Styles/ProductLandingPage/ImageMag.module.css'; 


function ImageMag() {
    
    
    const { id } = useParams();

// A variable that holds the item that matches the id parameter
const item = PRODUCTS.find((item) => item.id === (id));

console.log(item); 
console.log("is this finally working???"); 
console.log(item.id); 


const {productName, price, productImage} = item; 

    const img = productImage; 

    return (
        <div className={S.container}  >
            
            <div className={S.imageRowContainer} >
            
            
            <div className={S.right}  >
            <img id={S.rowImage}  src={productImage} alt="alt" />

            </div>
            <div className={S.right} >
            <img id={S.rowImage}  src={productImage} alt="alt" />

                
            </div>
            <div className={S.right}  >
            <img id={S.rowImage}  src={productImage} alt="alt" />
                
            </div>
            <div className={S.right} >
            <img id={S.rowImage}  src={productImage} alt="alt" />
                
            </div>
        </div>
            
            
                 <div style={{width: "30vw", display: "flex", margin: "0 auto"}} className="left_2">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                                
                            }, 
                            // This is the zoomed image 
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1200,
                                
                            },
                            enlargedImageContainerDimensions: {
                                width: '100%',
                                height: '100%',
                                
                            },
                        }}
                    />
                </div>
                
            
            </div>
    );
}

export default ImageMag;