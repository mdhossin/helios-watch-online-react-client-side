import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
// add service page
const AddService = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // get the from data for createing new service
  const onSubmit = (data) => {
    fetch("https://pure-headland-43911.herokuapp.com/products", {
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
          // show the success message when service added successfully
          swal("Good job!", "Service added successfully", "success");
          reset();
        }
      });
  };

  return (
    <Container sx={{ py: 5, mb: 2 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#444444", mb: 2 }}
        component="div"
      >
        Add New Product / Service
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
                label="Watch name"
                {...register("title", { required: true })}
                required
                placeholder="Watch Name"
              />

              <TextField
                margin="normal"
                fullWidth
                label="Watch Description"
                id="text"
                type="text"
                {...register("description", { required: true })}
                required
                multiline
                rows={4}
                placeholder="Watch Description"
              />

              <TextField
                margin="normal"
                fullWidth
                type="number"
                label="Price"
                {...register("price", { required: true })}
                required
                placeholder="Watch price"
              />
              <TextField
                {...register("image", { required: true })}
                placeholder="Add image link..."
                margin="normal"
                fullWidth
                required
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
                Add Service
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddService;
