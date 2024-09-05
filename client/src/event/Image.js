import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

// Import required CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image Slider Component
const ImageSlider = ({ images = [] }) => {

  const settings = {
    dots: true,
    infinite: images.length > 1, // Only allow infinite scrolling if more than one image
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: images.length > 1, // Autoplay only for multiple images
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: "60%", margin: "0 auto", mt: 2 }}>
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Slide ${index + 1}`}
              sx={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          ))}
        </Slider>
      ) : (
        <p>No images available</p>
      )}
    </Box>
  );
};

export default ImageSlider;
