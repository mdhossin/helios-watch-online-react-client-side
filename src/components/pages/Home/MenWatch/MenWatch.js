import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import watchOne from "../../../images/manWatch/watch-1.jpg";
import fosel from "../../../images/manWatch/fosel.jpg";
import casio from "../../../images/manWatch/casio.jpg";
// man watch page
const MenWatch = () => {
  AOS.init();
  return (
    <Box sx={{ flexGrow: 1, py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Grid container item sx={12}>
            <Grid data-aos="fade-up" data-aos-offset="100" sx={{ textAlign: "center", p: 5 }} item xs={12} md={12}>
              <Typography variant="caption" display="block" gutterBottom>
                ELEGANCE IS SIMPLICITY
              </Typography>
              <Typography
                sx={{ color: "#444444" }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Men's Watches
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Choose from a wide range of specially curated watches just for
                you!
              </Typography>
              <Button variant="contained">Shop Now</Button>
            </Grid>

            <Grid item xs={12} md={12}>
              {" "}
              <Grid container item sx={12}>
                <Grid data-aos="fade-down" data-aos-offset="100" item xs={6} md={6}>
                  <img src={fosel} alt="banner" height="100%" width="100%" />
                </Grid>
                <Grid data-aos="fade-top" data-aos-offset="100" item xs={6} md={6}>
                  <img src={casio} alt="banner" height="100%" width="100%" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid data-aos="fade-up" data-aos-offset="100" item xs={12} md={5}>
          <img src={watchOne} alt="banner" height="100%" width="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenWatch;
