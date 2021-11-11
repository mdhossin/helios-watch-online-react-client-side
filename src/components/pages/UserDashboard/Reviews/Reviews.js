import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { makeStyles } from "@mui/styles";
import useAuth from "../../../hooks/useAuth";

// const useStyles = makeStyles(() => ({
//     form: {
//       border: '1px solid grey',
//       padding: '50px',
//       borderRadius: '10px'

//     },

//   }));

const Reviews = () => {
  // const classes = useStyles()
  const { id } = useParams();
  const { user, isLoading, setIsLoading } = useAuth();

  //   const [product, setProduct] = useState({});
  //   console.log(product);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/reviews", {
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
      <Container sx={{ py: 5, mb: 2 }}>
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
                  {...register("rating", { min: 0, max: 5 })}
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
      <Box>{/* <Footer></Footer> */}</Box>
    </>
  );
};

export default Reviews;
