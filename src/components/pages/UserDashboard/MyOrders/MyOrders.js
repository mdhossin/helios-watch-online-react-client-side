import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import swal from "sweetalert";
const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    },
  },
  pending: {
    color: "#444444",
    backgroundColor: '#dddddd',
    padding:'7px 16px',
    borderRadius : '10px',
   
  },
}));

const MyOrders = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
console.log(orders);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [user]);

  const handelDelete = (id) => {
    const procedd = window.confirm("Are you sure you want to delete?");
    if (procedd) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("user delete data", data);
          if (data?.deletedCount > 0) {
            swal("Good job!", "Deleted successfully", "success");
            const remaining = orders?.filter((product) => product._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <Container>
      {isLoading ? (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : orders?.length === 0 ? (
        <Alert severity="info">
          Service item not found. Please go to the services page and make an
          order! And come back this page!
        </Alert>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {orders?.map((order, index) => (
              <Grid key={index} item xs={4} sm={4} md={4}>
                <Card className={classes.link} elevation={0}>
                  <CardMedia
                    component="img"
                    height="250px"
                    width="100%"
                    image={order?.service?.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {order?.service?.title}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        ${order?.service?.price}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {order?.service?.description.slice(0, 80)}...
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 2,
                    }}
                  >
                    <Button
                      onClick={() => handelDelete(order?._id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                    <Typography className={classes.pending} gutterBottom variant="body1" component="div">
                        {order?.status}
                      </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default MyOrders;
