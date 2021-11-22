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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

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
// single service page connected to all services page
const Service = ({ service, aos, aos_offset }) => {
  const classes = useStyles();
  const { _id, title, image, description, price } = service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card data-aos={aos} data-aos-offset={aos_offset} sx={{ height: "100%" }} className={classes.link} elevation={0}>
        <CardMedia
        className={classes.media}
          component="img"
          height="250px"
          width="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 90)}...
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
        >
          <Link style={{ textDecoration: "none" }} to={`/allServices/${_id}`}>
          <Button variant="contained">
              <ShoppingCartIcon sx={{fontSize: '22px',mr:0.5}} />
              Add to cart</Button>
          </Link>
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Service;
