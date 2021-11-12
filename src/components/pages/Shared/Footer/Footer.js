import React from "react";

import {
  AppBar,
  Button,
  Container,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { styled } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#FBFBFB",
    fontSize: "16px",
    padding: "0px",
  },
  icon: {
    color: "white",
  },
}));

// useing media query for mobile responsive
const Root = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(3),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar
      sx={{ py: 5, backgroundColor: "#1976D2", color: "#FBFBFB" }}
      position="static"
      color="primary"
    >
      <Container>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6} md={3}>
              <Typography variant="h6" gutterBottom component="div">
                COMPANY
              </Typography>

              <List style={{ color: "red" }}>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    About us
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Blog
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Careers
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Contact Us
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Typography variant="h6" gutterBottom component="div">
                POLICIES AND ORDER
              </Typography>
              <List style={{ color: "red" }}>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Authenticity Guarantee
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Disclaimer
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Shipping and Return Policies
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={5} sm={5} md={3}>
              <Typography variant="h6" gutterBottom component="div">
                HELP
              </Typography>
              <List style={{ color: "red" }}>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Corporate Gifting
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    FAQ's
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    My Account
                  </Link>
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <Link className={classes.link} to="/home">
                    Repair Center
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={7} sm={7} md={3}>
              <Typography variant="h6" gutterBottom component="div">
                SUBSCRIBE TO OUR NEWSLETTER
              </Typography>
              <List style={{ color: "red" }}>
                <ListItem sx={{ pl: 0, pb: 0, ml: 0 }}>
                  <FormControl
                    fullWidth
                    sx={{ backgroundColor: "#212736", color: "white", mb: 1 }}
                    variant="filled"
                  >
                    <InputLabel
                      sx={{ color: "white" }}
                      htmlFor="filled-adornment-amount"
                    >
                      Email
                    </InputLabel>
                    <FilledInput
                      sx={{ color: "white", width: "100%", pr: 0 }}
                      id="filled-adornment-amount"
                    />
                  </FormControl>
                  
                </ListItem>
                <Button sx={{ py: 1, px: 5, }} variant="contained"  >
                  submit
                </Button>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
        <Box>
          <Root>
            <Typography
              sx={{ textAlign: "center" }}
              variant="body1"
              color="inherit"
            >
              © 2019 Just Watches. All Rights Reserved.
            </Typography>
          </Root>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
