import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Slide.css';
import slideImage from './jsonFile/slideImage.json';

const CarouselContainer = () => {
    return (
        <div className="slide_area">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={slideImage[3]}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Company 1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={slideImage[0]}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Company 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideImage[2]}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Compnay 3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </div>
    );
}

export default CarouselContainer;