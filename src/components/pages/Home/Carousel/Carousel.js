import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";
const images = [
  {
    id: 1,
    imgPath:
      "https://www.helioswatchstore.com/sites/default/files/1500x600.png",
  },
  {
    id: 2,
    imgPath:
      "https://www.helioswatchstore.com/sites/default/files/1500x600.jpg",
  },
  {
    id: 3,
    imgPath:
      "https://www.helioswatchstore.com/sites/default/files/banner%20opt2.jpg",
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
