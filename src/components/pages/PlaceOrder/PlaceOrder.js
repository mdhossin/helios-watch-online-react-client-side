import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  form: {
    border: "1px solid grey",
    padding: "50px",
    borderRadius: "10px",
  },
}));
// place order page
const PlaceOrder = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { user, isLoading, setIsLoading } = useAuth();
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`https://mighty-bastion-35979.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [id, setIsLoading]);
  // when click the button place the order from
  const onSubmit = (data) => {
    data.service = product;
    data.email = user?.email;
    data.status = "Pending";
    fetch("https://mighty-bastion-35979.herokuapp.com/placeorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Good job!", "Order processed successfully", "success");
          reset();
        }
      });
  };

  return (
    <>
      <Container sx={{ py: 5, mb: 2 }}>
        <Typography variant="h4" gutterBottom component="div">
          Watch Details
        </Typography>
        <Box>
          <Grid container spacing={5}>
            {isLoading ? (
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <CircularProgress></CircularProgress>
              </Box>
            ) : (
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="h5" gutterBottom component="div">
                    {product?.title}
                  </Typography>
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    variant="body1"
                    gutterBottom
                    component="div"
                  >
                    Price{" "}
                    <span style={{ color: "#1565C0" }}>${product?.price}</span>
                  </Typography>
                </Box>
                <img
                  src={product?.image}
                  alt="banner"
                  height="400px"
                  width="100%"
                />
                <Typography
                  sx={{ mt: 2 }}
                  variant="body1"
                  gutterBottom
                  component="div"
                >
                  {product?.description}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <TextField
                  margin="normal"
                  fullWidth
                  id="lastName"
                  defaultValue={user?.displayName}
                  label="Name"
                  {...register("user", { required: true })}
                  required
                  placeholder=" Name"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="Email"
                  defaultValue={user?.email}
                  label="Email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  required
                />

                <TextField
                  margin="normal"
                  fullWidth
                  id="phone"
                  type="number"
                  {...register("number")}
                  required
                  placeholder="Phone Number"
                />

                <TextField
                  margin="normal"
                  fullWidth
                  id="text"
                  type="text"
                  {...register("city", { required: true })}
                  required
                  placeholder="City"
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
                  Buy now
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box>
        <Footer></Footer>
      </Box>
    </>
  );
};

export default PlaceOrder;
