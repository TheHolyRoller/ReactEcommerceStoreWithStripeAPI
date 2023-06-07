/* eslint-disable no-unused-vars */
/** 




*/

import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router';

import ReactImageMagnify from 'react-image-magnify';

import {PRODUCTS} from '../Data/products'; 

import S from '../Styles/ProductLandingPage/ImageMag.module.css'; 

let myURLID; 

function ImageMag() {

    const { id } = useParams();
    
const item = PRODUCTS.find((item) => item.id === (id));


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
export {myURLID}
