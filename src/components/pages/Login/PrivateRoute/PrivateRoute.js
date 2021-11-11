import React from "react";
import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Box sx={{mt: 3, textAlign: 'center'}}>
        <CircularProgress></CircularProgress>
    </Box>;
  }
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
