import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";
import sliderOne from '../../../images/bannerImg/banner-1.png'
import sliderTwo from '../../../images/bannerImg/banner-2.jpg'
import sliderThree from '../../../images/bannerImg/banner-3.png'
const images = [
  {
    id: 1,
    imgPath:sliderOne,
  },
  {
    id: 2,
    imgPath:sliderTwo,
  },
  {
    id: 3,
    imgPath:sliderThree,
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider
        style={{ width: "100%", margin: "0px", padding: "0px" }}
        {...settings}
      >
        {images.map((image) => (
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            src={image.imgPath}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
