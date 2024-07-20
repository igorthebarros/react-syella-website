import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Banner.css';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={`${process.env.PUBLIC_URL}/banner/banner_1.jpg`}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>Description for first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={`${process.env.PUBLIC_URL}/banner/banner_2.jpg`}
                    alt='second slide'
                />
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Description for second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={`${process.env.PUBLIC_URL}/banner/banner_3.jpg`}
                    alt='third slide'
                />
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Description for third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner;