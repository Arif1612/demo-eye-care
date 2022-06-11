import React from 'react';
import banner1 from '../..//Images/Banner/ban1.png'
import banner2 from '../../Images/Banner/ban2.png'
import banner3 from '../../Images/Banner/ban3.png'
import Carousel from 'react-bootstrap/Carousel';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>

        </div>
    );
};

export default Home;



