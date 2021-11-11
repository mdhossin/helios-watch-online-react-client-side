import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import SingleService from "../SingleService/SingleSerive";


const Services = () => {
  const [services, setServices] = useState([]);
  // console.log(services);
  const [ isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <Container sx={{ pt: 3, pb: 5 }}>
      <Typography
        sx={{ textAlign: "center", mb: 5 }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Our Services
      </Typography>
      {isLoading ? (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {services?.slice(0, 6).map((service, index) => (
              <SingleService service={service} key={service._id} />
            ))}
          </Grid>
        </Box>
      )}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Link style={{ textDecoration: "none" }} to="/allServices">
          <Button variant="contained">See All Services</Button>
        </Link>
      </Box>
    </Container>
   
    </>
  );
};

export default Services;
