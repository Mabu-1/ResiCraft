import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [images, setImages] = useState([
    'https://i.ibb.co/CPNGKdC/pro-5.jpg',
    'https://i.ibb.co/Tg8cn60/pro-7.jpg',
    'https://i.ibb.co/mbp0Qdh/pro-9.jpg',
    'https://i.ibb.co/RCjbk5b/pro-10.jpg',
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
  };

  const bannerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '60vh', // Adjust the height as needed
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  };

  const companyTitleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontFamily: 'cursive', // Add a cursive font for a fancy look
  };

  const taglineStyle = {
    fontSize: '1.5rem',
    fontStyle: 'italic',
  };

  return (
    <div style={bannerContainerStyle}>
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} style={imageStyle}>
            <img src={image} alt={`Apartment ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
      <div style={overlayStyle}>
        <div>
          <h1 style={companyTitleStyle}>ResiCraft</h1>
          <p style={taglineStyle}>Bringing Your Dream Home to You</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
