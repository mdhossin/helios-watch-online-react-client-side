import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

import bgImg from "../../images/aboutus.jpg";
import Footer from "../Shared/Footer/Footer";

const appoinmentBg = {
  background: `url(${bgImg}) no-repeat center`,
  backgroundColor: "rgba(45, 58, 74, .5)",
  backgroundBlendMode: "darken, luminosity",
  height: "300px",
};

const AboutUs = () => {
  return (
    <Box  sx={{backgroundColor: '#ffffff'}}>
      <Box
        style={appoinmentBg}
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "white" }}
            component="div"
          >
            About Us
          </Typography>

          <Button sx={{ mt: 2 }} variant="contained">
            Learn More
          </Button>
        </Box>
      </Box>
      <Container sx={{ my: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom component="div">
              WHO WE ARE
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary" }}
              gutterBottom
              component="div"
            >
              Rama watch boutique - a halt where time is adorned, where values
              and tradition are prime, where dedication to service is the
              driving force and where every customer is valued. With a legacy of
              over six decades and stores spanning across Delhi and NCR, we are
              a growing chain of multi brand watch boutiques dealing in premium,
              luxury and fashion brands. Being authorised for over 50 plus
              premium brands, we are not just pleased to offer a huge array of
              watches for our clients but also we constantly strive to create a
              state of art ambiance, an enriching experience based on trust and
              integrity. We are devoted to oblige each customer with moments of
              happiness therefore all our staff members are well trained to help
              our customers choose the watch that is exclusively made to be worn
              with pride. We also feel elated in accessorising your moments of
              happiness with branded belts, pens and cuff links.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom component="div">
              WHAT WE BELIEVE
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary" }}
              gutterBottom
              component="div"
            >
              Our consistent endeavour focuses chiefly on to meeting out
              individual customer’s expectations by not only exhibiting a
              diverse portfolio of exclusive quality time pieces but by also how
              the products are being offered in order to form lasting
              impressions and further enhance your passion for watches. We take
              immense pleasure in creating worthwhile elevating experiences for
              our valued customers’ happy times ahead.
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary" }}
              gutterBottom
              component="div"
            >
              OUR VISION Humbly persevere to ascend and endeavour earnestly to
              scale lofty heights in watch retail through pioneering spirit and
              value driven culture whose core strength is mainly on performance
              in terms of customer loyalty and to ensure highest standards in
              the fast ticking hands of time.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default AboutUs;
