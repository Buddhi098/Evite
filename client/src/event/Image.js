import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import ev1 from '../images/event/ev1.jpg';
import ev2 from '../images/event/ev2.jpg';
import ev3 from '../images/event/ev3.jpg';

// Sample images
const images = [
  ev1,
  ev2,
  ev3,
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: '60%', margin: '0 auto', mt: 2 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index + 1}`}
            sx={{
              width: '50%',
              height: '450px',
              borderRadius: 2,
            }}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default ImageSlider;
