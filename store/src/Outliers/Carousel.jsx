import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container  from 'react-bootstrap/Carousel';
import Button  from 'react-bootstrap/Carousel';


// This might be classhing with the styles 
import 'bootstrap/dist/css/bootstrap.min.css'; 

// import '../Styles/Carousel.css'; 

import Mountain from '../assets/Mountains.jpg'; 
import Car from '../assets/Car.jpg'; 
import Porsche from '../assets/Porsche.jpg'; 
import Diving from '../assets/Diving.jpg'; 


// Create the style variables here 







function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  

  return (
  <>
  <div className="carouselContainer" >
  <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Diving}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Car}          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Car}  alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
          </>
  );
}

export default ControlledCarousel;
