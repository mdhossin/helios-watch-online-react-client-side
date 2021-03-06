import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import SingleService from "../SingleService/SingleSerive";

// services page connected to home page
const Services = () => {
  const [services, setServices] = useState([]);
  // console.log(services);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setIsLoading(true);
    fetch("https://pure-headland-43911.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Container sx={{ py: 5 }}>
        <Typography
          sx={{ textAlign: "center", mb: 5, color: "#444444" }}
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
                <SingleService
                  aos="fade-up"
                  aos_offset="100"
                  service={service}
                  key={service._id}
                />
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
