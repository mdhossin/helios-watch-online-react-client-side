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
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  console.log(loginData);
  const { user, registerUser, isLoading, authError } = useAuth();

  const history = useHistory();

  const handelOnBlur = (e) => {
    const inputField = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[inputField] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handelRegisterSubmit = (e) => {
    const fullName = `${loginData?.firstName} ${loginData?.lastName}`;
    console.log("first name", fullName);
    if (loginData.password !== loginData.password2) {
      alert("Password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, fullName, history);
    e.target.value = "";
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Create New Account
        </Typography>
        {!isLoading && (
          <Box component="form" onSubmit={handelRegisterSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required={true}
                  fullWidth
                  isRequired="true"
                  placeholder="First Name"
                  id="firstName"
                  onBlur={handelOnBlur}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required={true}
                  fullWidth
                  id="lastName"
                  onBlur={handelOnBlur}
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="email"
                  onBlur={handelOnBlur}
                  label="Email Address"
                  name="email"
                  placeholder="Email address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="password"
                  label="Password"
                  onBlur={handelOnBlur}
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  onBlur={handelOnBlur}
                  type="password"
                  id="password"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
        {isLoading && <CircularProgress />}

        {user?.email && (
          <Alert severity="success">User Account Created Successfully!</Alert>
        )}

        {authError && <Alert severity="error">{authError}</Alert>}
      </Box>
    </Container>
  );
};

export default Register;
