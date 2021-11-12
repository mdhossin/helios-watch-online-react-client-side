import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink as Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import AvTimerIcon from "@mui/icons-material/AvTimer";
const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: "20px",
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "#f0ffff",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "5px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: "20px",
  },
}));

function Navbar() {
  const { user, logout } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" ssx={{ bgcolor: "primary.main" }}>
      <CssBaseline />
      <Toolbar>
        <Typography
          sx={{ textAlign: "start" }}
          variant="h6"
          className={classes.logo}
        >
          <AvTimerIcon sx={{ fontSize: "40px" }} /> HELIOS
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Box className={classes.navlinks}>
            <Link
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              className={classes.link}
            >
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/about"
              className={classes.link}
            >
              <Button color="inherit">About Us</Button>
            </Link>
            <Link
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/allServices"
              className={classes.link}
            >
              <Button color="inherit">Services</Button>
            </Link>

            {user?.email && (
              <Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "yellow",
                }}
                to="/dashboard"
                className={classes.link}
              >
                <Button color="inherit">Dashboard</Button>
              </Link>
            )}
            <Typography
              className={classes.linkButton}
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                color: "#cfd8dc",
                fontSize: "16px",
                marginTop: "7px",
                marginLeft: "15px",
              }}
              component="div"
            >
              {user?.displayName}
            </Typography>

            {!user?.email ? (
              <Link className={classes.linkButton} to="/login">
                <Button variant="outlined" color="inherit">
                  Login
                </Button>
              </Link>
            ) : (
              <>
                <Link className={classes.linkButton} to="/register">
                  <Button onClick={logout} variant="outlined" color="inherit">
                    Logout
                  </Button>
                </Link>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
