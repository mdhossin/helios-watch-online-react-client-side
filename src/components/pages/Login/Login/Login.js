import React, { useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  // console.log(loginData);

  const {
    loginWithEmailAndPassword,
    signInWithGoolge,
    authError,
    isLoading,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  // get the input value onchange on form submit
  const handelOnChange = (e) => {
    const inputField = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[inputField] = value;
    setLoginData(newLoginData);
  };
  // form onsumbit
  const handelLoginSubmit = (e) => {
    loginWithEmailAndPassword(
      loginData.email,
      loginData.password,
      location,
      history
    );
    e.preventDefault();
  };

  // sign in with google
  const handelGoogleSignIn = () => {
    signInWithGoolge(location, history);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handelLoginSubmit} sx={{ mt: 1 }}>
          {/* onSubmit={handleSubmit} */}
          <TextField
            margin="normal"
            required={true}
            fullWidth
            id="email"
            onBlur={handelOnChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="Email address"
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onBlur={handelOnChange}
            autoComplete="current-password"
            placeholder="Password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Typography sx={{ mt: 2 }} variant="body1" gutterBottom component="div">
          ----------- OR -------------
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handelGoogleSignIn}
          sx={{ mt: 2, mb: 2 }}
        >
          Sign In With Google
        </Button>
      </Box>
      {isLoading && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      )}

      {authError && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Alert severity="error">{authError}</Alert>
        </Box>
      )}
    </Container>
  );
};

export default Login;
