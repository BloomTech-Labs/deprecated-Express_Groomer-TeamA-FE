import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import './groomer.css';

export const Hero = () => {
  const [slide, setSlide] = useState(0);

  const slider = useRef();

  const carousel_props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const contentStyle = {
    width: '80%',
    height: '20%',
    objectFit: 'cover',
    overflow: 'hidden',
    objectPosition: 'center center',
  };

  const cover_images = [
    'https://petapixel.com/assets/uploads/2016/07/3-Teddy-800x400.jpg',
    'https://abbottanimal.com/wp-content/uploads/2019/01/ABBOT-ANIMAL-HOSPITAL-GROOMING-1.jpg',
  ];

  return (
    // <div className="fullscreen">
    <div className="container-fluid">
      <Carousel autoplay>
        <div className="mySlides fade">
          <img
            style={{ width: '100%', height: '300px' }}
            src={cover_images[0]}
          ></img>
        </div>
        <div className="mySlides fade">
          <img
            style={{ width: '100%', height: '300px' }}
            src={cover_images[1]}
          ></img>
        </div>
      </Carousel>
    </div>
  );
};
