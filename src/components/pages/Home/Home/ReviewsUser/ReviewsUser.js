import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAuth from "../../../../hooks/useAuth";

const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    },
  },
  pending: {
    color: "#444444",
    backgroundColor: "#dddddd",
    padding: "7px 16px",
    borderRadius: "10px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30PX",
  },
}));
// user reviews page
const ReviewsUser = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://pure-headland-43911.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container sx={{ pb: 8, mt: 2 , px: 4}}>
      <Typography
        sx={{ textAlign: "center", mb: 1, color: "#444444" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Reviews
      </Typography>
      {isLoading ? (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Slider {...settings}>
            {reviews?.map((review, index) => (
              <Card className={classes.link} elevation={0}>
                <Stack
                  className={classes.imageContainer}
                  direction="row"
                  spacing={2}
                >
                  {user?.photoURL ? (
                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                  ) : (
                    <PersonPinIcon sx={{ fontSize: "50px" }} />
                  )}

                  <Typography gutterBottom variant="h6" component="div">
                    {review?.user}
                  </Typography>
                </Stack>
                <CardContent>
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="body1"
                    color="text.secondary"
                  >
                    "{review?.description.slice(0, 90)}...."
                  </Typography>
                  <Typography
                    sx={{ textAlign: "center", mt: 2 }}
                    gutterBottom
                    variant="body1"
                    component="div"
                  >
                    <Rating
                      name="half-rating-read"
                      defaultValue={review?.number}
                      precision={0.5}
                      readOnly
                    />
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      )}
    </Container>
  );
};

export default ReviewsUser;
