// import React from "react";
// import { useForm } from "react-hook-form";
// import swal from "sweetalert";
// import Footer from "../../Footer/Footer";
// import "./AddService.css";
// // add service page
// const AddService = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const onSubmit = (data) => {
//     const product = data;
//     fetch("https://dry-springs-45695.herokuapp.com/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result.insertedId);
//         if (result.insertedId) {
//           swal("Good job!", "Service added successfully", "success");
//           reset();
//         }
//       });
//   };
//   return (
//     <>
//       <div className="change-background">
//         <div className="container mt-4">
//           <div className="text-center mb-4">
//             <h1>Add New Service</h1>
//           </div>
//           <div className="form-box">
//             <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
//               {/* register your input into the hook by invoking the "register" function */}
//               <input
//                 type="text"
//                 className="form-control"
//                 {...register("name")}
//                 required
//                 placeholder="Add tour location..."
//               />

//               <input
//                 className="form-control my-3"
//                 type="number"
//                 {...register("price")}
//                 required
//                 placeholder="Add price..."
//               />
//               <input
//                 className="form-control my-3"
//                 type="text"
//                 {...register("time")}
//                 required
//                 placeholder="Tour time like.. 5 Days / 6 Nights..."
//               />

//               {/* include validation with required or other standard HTML validation rules */}
//               <input
//                 className=" form-control my-3"
//                 {...register("description", { required: true })}
//                 required
//                 placeholder="Add tour description..."
//               />

//               <input
//                 {...register("image", { required: true })}
//                 placeholder="Add image link..."
//                 className="form-control my-3"
//                 required
//               />

//               {/* errors will return when field validation fails  */}
//               {errors.exampleRequired && <span>This field is required</span>}
//               <br />
//               <input
//                 className="btn-regular mb-3"
//                 type="submit"
//                 value="Add New Service"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// };

// export default AddService;

import { Button, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddService = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      console.log(data);
    
    fetch("http://localhost:5000/products", {
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
          swal("Good job!", "Service added successfully", "success");
          reset();
        }
      });
  };

  return (
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
