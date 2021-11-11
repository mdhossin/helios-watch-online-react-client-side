import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import { makeStyles } from "@mui/styles";
import swal from "sweetalert";

const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    },
  },
  icon: {
    color: "white",
  },
}));

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  const classes = useStyles();
  const [ isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  const handelDelete = (id) => {
    const procedd = window.confirm("Are you sure you want to delete?");
    if (procedd) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            swal("Good job!", "Deleted successfully", "success");
            const remaining = services?.filter((product) => product._id !== id);
            setServices(remaining);
          }
        });
    }
  };


  return (
    <>
      <Container sx={{ pt: 3, pb: 5 }}>
        <Typography
          sx={{ textAlign: "center", mb: 5 }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Manage All Order
        </Typography>
        {isLoading ? (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <CircularProgress></CircularProgress>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {services?.map((service, index) => (
                <Grid item xs={4} sm={4} md={4}>
                  <Card className={classes.link} elevation={0}>
                    <CardMedia
                      component="img"
                      height="250px"
                      width="100%"
                      image={service?.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {service?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service?.description.slice(0, 90)}...
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: 2,
                      }}
                    >
                      <Button  onClick={() => handelDelete(service?._id)} variant="outlined" color="error">
                        delete
                      </Button>

                      <Typography gutterBottom variant="h6" component="div">
                        ${service?.price}
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
};

export default ManageProducts;
