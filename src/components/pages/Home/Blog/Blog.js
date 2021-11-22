import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    },
  },
  icon: {
    color: "white",
  },
  media: {
    transition: ".3s all ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
// blog page connected to blogs page
const Blog = ({ blog, aos, aos_offset }) => {
  const classes = useStyles();
  const { name, title, image, description } = blog;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        data-aos={aos}
        data-aos-offset={aos_offset}
        sx={{ height: "100%" }}
        className={classes.link}
        elevation={0}
      >
        <CardMedia
          className={classes.media}
          component="img"
          height="250px"
          width="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ color: "text.secondary", fontSize: "12px" }}
            gutterBottom
            variant="body1"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: "15px", fontWeight: "bold", color: "#444444" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 90)}...
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
        >
          <Button variant="outlined">Read More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Blog;
