import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "18px",

    paddingLeft : '50px',
    display: "block",

    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
  buttons: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "18px",
    paddingLeft: "35px",
  },
}));

function DrawerComponent() {
  const { user, logout } = useAuth();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List
          sx={{ backgroundColor: "#28425b", height: "100%", width: "240px" }}
        >
          <ListItem sx={{ px: 0, pt: 3 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText  >
              <Link to="/home" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem sx={{ px: 0, }} onClick={() => setOpenDrawer(false)}>
            <ListItemText >
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem sx={{ px: 0,  }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/allServices" className={classes.link}>
                Services
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem sx={{ px: 0,pb : 0, m: 0 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/dashboard" className={classes.link}>
                Dashboard
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {user?.email ? (
                <Link className={classes.buttons} to="/register">
                  <Button onClick={logout} variant="outlined" color="inherit">
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to="/login" className={classes.buttons}>
                  <Button variant="outlined" color="inherit">
                    Login
                  </Button>
                </Link>
              )}
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.icon}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
