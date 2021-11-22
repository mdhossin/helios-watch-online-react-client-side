import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Service from "../Service/Service";
import Footer from "../../../pages/Shared/Footer/Footer";
// all services page
const AllServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setIsLoading(true)
    fetch("https://mighty-bastion-35979.herokuapp.com/products")
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
          Our All Services
        </Typography>
        {isLoading ? (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <CircularProgress></CircularProgress>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justify="center"
            >
              {services?.map((service, index) => (
                <Service aos="fade-up-left" aos_offset="100" service={service} key={service._id} />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AllServices;
