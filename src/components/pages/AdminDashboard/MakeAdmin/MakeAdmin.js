import React, { useState } from "react";
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
// create new admin page
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handelOnChange = (e) => {
    setEmail(e.target.value);
  };

  // from submit
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://mighty-bastion-35979.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#444444" }}
          component="div"
        >
          Create New Admin
        </Typography>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            type="email"
            onBlur={handelOnChange}
            label="Your Email"
            variant="standard"
          />

          <Button
            sx={{ width: "60%", mt: 2 }}
            type="submit"
            variant="contained"
          >
            Make Admin
          </Button>
        </form>
        {success && (
          <Alert severity="success">Admin created Successfully!</Alert>
        )}
      </Box>
    </Container>
  );
};

export default MakeAdmin;
