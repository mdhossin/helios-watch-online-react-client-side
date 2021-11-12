import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
// reviews page
const Reviews = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // when click the button create new reviews
  const onSubmit = (data) => {
    fetch("https://mighty-bastion-35979.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.insertedId);
        if (result.insertedId) {
          swal("Good job!", "Reviews added our website", "success");
          reset();
        }
      });
  };

  return (
    <>
      <Container>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#444444" }}
          component="div"
        >
          Add Reviews
        </Typography>
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <form
                //    className={classes.form}
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* register your input into the hook by invoking the "register" function */}
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  defaultValue={user?.displayName}
                  label="Name"
                  {...register("user", { required: true })}
                  required
                  placeholder=" Name"
                />

                <TextField
                  margin="normal"
                  fullWidth
                  label="Description"
                  id="text"
                  type="text"
                  {...register("description", { required: true })}
                  required
                  multiline
                  rows={4}
                  placeholder="Description"
                />

                <TextField
                  margin="normal"
                  fullWidth
                  type="number"
                  {...register("number", { min: 0, max: 5 })}
                  required
                  placeholder="Rating"
                />
                {/* include validation with required or other standard HTML validation rules */}

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Reviews;
