import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "18px",
    paddingLeft: "50px",
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
// drawer page like navbar for mobile design only show this
function DrawerComponent() {
  const { user, logout } = useAuth();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {user?.email && (
          <Box sx={{ backgroundColor: "#28425b" }}>
            {user?.photoURL ? (
              <Avatar
                style={{ marginLeft: "60px", marginTop: "20px" }}
                alt="Remy Sharp"
                src={user?.photoUrl}
                sx={{ width: 60, height: 60 }}
              />
            ) : (
              <AccountCircleIcon
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  color: "white",
                }}
                sx={{ fontSize: "60px" }}
              />
            )}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "50px",
                mt: 1,
                mb: 0,
              }}
              component="div"
            >
              {user?.displayName}
            </Typography>
          </Box>
        )}
        <List
          sx={{ backgroundColor: "#28425b", height: "100%", width: "240px" }}
        >
          <ListItem sx={{ px: 0, pt: 3 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/home" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/allServices" className={classes.link}>
                Services
              </Link>
            </ListItemText>
          </ListItem>

          {user?.email && (
            <ListItem sx={{ px: 0 }} onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/dashboard" className={classes.link}>
                  Dashboard
                </Link>
              </ListItemText>
            </ListItem>
          )}

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
