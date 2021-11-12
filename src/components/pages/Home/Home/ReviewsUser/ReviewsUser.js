import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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

const ReviewsUser = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://mighty-bastion-35979.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <Container sx={{ pb: 8, mt: 2 }}>
      <Typography
        sx={{ textAlign: "center", mb: 5 }}
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
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {reviews?.map((review, index) => (
              <Grid key={index} item xs={4} sm={4} md={4}>
                <Card className={classes.link} elevation={0}>
                  <Stack
                    className={classes.imageContainer}
                    direction="row"
                    spacing={2}
                  >
                    {user?.photoURL ? (
                      <Avatar alt="Remy Sharp" src={user?.photoURL} />
                    ) : (
                      <AccountCircleIcon sx={{ fontSize: "50px" }} />
                    )}

                    <Typography gutterBottom variant="h6" component="div">
                      {user?.displayName}
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
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ReviewsUser;
