import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

theme.typography.h3 = {
  fontSize: "48px",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
    marginBottom: "0px",
  },
};
// not found page
const NotFound = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Box>
          <ThemeProvider theme={theme}>
            <Typography
              sx={{ fontWeight: "bold", color: "#444444" }}
              variant="h3"
              gutterBottom
              component="div"
            >
              404{" "}
              <Typography
                sx={{ display: "inline", fontWeight: "bold", color: "#fb814e" }}
                variant="h3"
                gutterBottom
              >
                ERROR !
              </Typography>
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Typography
              sx={{ fontWeight: "bold", color: "#444444" }}
              variant="h3"
              gutterBottom
              component="div"
            >
              Page Not Found!
            </Typography>
          </ThemeProvider>
          <Typography variant="subtitle1" gutterBottom component="div">
            Sorry, we can't find the page you are looking for. Please go to{" "}
            <Typography
              sx={{ display: "inline" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              <Link sx={{ color: "#fb814e" }} to="/">
                Home
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
