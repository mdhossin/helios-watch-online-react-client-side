import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PaymentIcon from "@mui/icons-material/Payment";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Avatar, Button } from "@mui/material";
import MyOrders from "../../UserDashboard/MyOrders/MyOrders";
import Reviews from "../../UserDashboard/Reviews/Reviews";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "18px",

    padding: "10px 10px 10px 30px",
    display: "block",
    "&:hover": {
      backgroundColor: "#6088af",
    },
  },
  icon: {
    color: "white",
  },
  buttons: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "18px",
    paddingLeft: "30px",
  },
}));

const drawerWidth = 220;

function ResponsiveDrawer(props) {
  const { user, logout } = useAuth();
  let { path, url } = useRouteMatch();
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ backgroundColor: "#1976D2", color: "#ffffff", height: "100%" }}>
      {user?.photoURL ? (
        <Avatar
          style={{ marginLeft: "60px", marginTop: "30px" }}
          alt="Remy Sharp"
          src={user?.photoUrl}
          sx={{ width: 90, height: 90 }}
        />
      ) : (
        <AccountCircleIcon
          style={{ marginLeft: "60px", marginTop: "30px" }}
          sx={{ fontSize: "100px" }}
        />
      )}

      <Box sx={{ textAlign: "center", marginRight: "20px", marginTop: "8px" }}>
        {" "}
        {user?.displayName}
      </Box>
      <Divider />
      <List>
        <ListItemText>
          <Link to="/home" className={classes.link}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box>
                <HomeIcon sx={{ fontSize: "22px", mt: 1 }} />
              </Box>{" "}
              <Box style={{ marginLeft: "4px" }}>Back Home</Box>
            </Box>
          </Link>
        </ListItemText>
        <Divider />
        <ListItemText>
          <NavLink
            to={`${url}`}
            className={classes.link}
            onClick={() => setMobileOpen(false)}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box>
                <BookmarkBorderIcon sx={{ fontSize: "22px", mt: 1, mr: 0.5 }} />
              </Box>{" "}
              <Box> My Orders</Box>
            </Box>
          </NavLink>
        </ListItemText>

        <ListItemText>
          <NavLink
            to={`${url}/pay`}
            activeStyle={{
              fontWeight: "bold",
              color: "yellow",
            }}
            className={classes.link}
            onClick={() => setMobileOpen(false)}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box>
                <PaymentIcon sx={{ fontSize: "22px", mt: 1, mr: 0.5 }} />
              </Box>{" "}
              <Box>Payment</Box>
            </Box>
          </NavLink>
        </ListItemText>

        <ListItemText>
          <NavLink
            to={`${url}/review`}
            activeStyle={{
              fontWeight: "bold",
              color: "yellow",
            }}
            className={classes.link}
            onClick={() => setMobileOpen(false)}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box>
                <RateReviewIcon sx={{ fontSize: "21px", mt: 1, mr: 0.5 }} />
              </Box>{" "}
              <Box>Review</Box>
            </Box>
          </NavLink>
        </ListItemText>
        <ListItemText
          className={classes.buttons}
          onClick={() => setMobileOpen(false)}
        >
          <Button onClick={logout} variant="outlined" color="inherit">
            Logout
          </Button>
        </ListItemText>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#1976D2",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Service List
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/pay`}>
            <Typography sx={{ ml: 2 }} variant="h6" noWrap component="div">
              Payment is coming soon
            </Typography>
          </Route>
          <Route path={`${path}/review`}>
            <Reviews></Reviews>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
