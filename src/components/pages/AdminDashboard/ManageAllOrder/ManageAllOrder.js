// import { Box } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";

// import { useTheme } from "@mui/material/styles";
// import {
//   Alert,
//   CircularProgress,
//   Container,
//   Grid,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
// } from "@mui/material";

// import { makeStyles } from "@mui/styles";

// import swal from "sweetalert";

// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));
// const useStyles = makeStyles(() => ({
//   link: {
//     "&:hover": {
//       boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
//     },
//   },
//   pending: {
//     color: "#444444",
//     backgroundColor: "#dddddd",
//     padding: "7px 16px",
//     borderRadius: "10px",
//   },
// }));

// const ManageAllOrder = () => {
//   const theme = useTheme();
//   const classes = useStyles();
//   const [orders, setOrders] = useState([]);
//   //   console.log(orders);
//   const { user, isLoading, setIsLoading } = useAuth();

//   useEffect(() => {
//     fetch("http://localhost:5000/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data);
//         setIsLoading(false);
//       });
//   }, [user]);

//   const handelDelete = (id) => {
//     const procedd = window.confirm("Are you sure you want to delete?");
//     if (procedd) {
//       fetch(`http://localhost:5000/orders/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("user delete data", data);
//           if (data?.deletedCount > 0) {
//             swal("Good job!", "Deleted successfully", "success");
//             const remaining = orders?.filter((product) => product._id !== id);
//             setOrders(remaining);
//           }
//         });
//     }
//   };

//   const handelChange = (id) => {
//     const data = orders?.find((pd) => pd?._id === id);
//     data.status = "Approved";
//     // console.log(data);
//     fetch(`https://dry-springs-45695.herokuapp.com/orders/${id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           setIsLoading(true);
//         }
//       });
//   };
//   return (
//     <Container>
//       {isLoading ? (
//         <Box sx={{ mt: 3, textAlign: "center" }}>
//           <CircularProgress></CircularProgress>
//         </Box>
//       ) : orders?.length === 0 ? (
//         <Alert severity="info">
//           Service item not found. Please go to the services page and make an
//           order! And come back this page!
//         </Alert>
//       ) : (

//         <TableContainer style={{overflowX:"auto"}} component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {orders?.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//         // <Box sx={{ flexGrow: 1 }}>
//         //   <Container>
//         //   <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
//         //     {orders?.map((order, index) => (
//         //       <Grid key={index} item xs={4} sm={4} md={6}>
//         //         <Card elevation={0} sx={{ display: "flex",  }}>
//         //         <CardMedia
//         //             component="img"
//         //             sx={{ width: 100 }}
//         //             image={order?.service.image}
//         //             alt="Live from space album cover"
//         //           />
//         //           <Box sx={{ display: "flex" }}>
//         //             <CardContent sx={{ flex: "1 0 auto" }}>
//         //               <Typography component="div" variant="h5">
//         //                 Live From Space
//         //               </Typography>
//         //               <Typography
//         //                 variant="subtitle1"
//         //                 color="text.secondary"
//         //                 component="div"
//         //               >
//         //                 Mac Miller
//         //               </Typography>
//         //             </CardContent>
//         //             <Box
//         //               sx={{
//         //                 display: "flex",
//         //                 alignItems: "center",
//         //                 pl: 1,
//         //                 pb: 1,
//         //               }}
//         //             ><Typography
//         //             variant="subtitle1"
//         //             color="text.secondary"
//         //             component="div"
//         //           >
//         //             Mac Miller
//         //           </Typography>
//         //           <Typography
//         //                 variant="subtitle1"
//         //                 color="text.secondary"
//         //                 component="div"
//         //               >
//         //                 Mac Miller
//         //               </Typography>

//         //               <Button variant="contained">Contained</Button>
//         //               <Button variant="contained">Contained</Button>

//         //             </Box>
//         //           </Box>

//         //         </Card>
//         //       </Grid>
//         //     ))}
//         //   </Grid>
//         //   </Container>
//         // </Box>
//       )}
//     </Container>
//   );
// };

// export default ManageAllOrder;

import { Button, CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  //   console.log(orders);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  // if(isLoading){
  //   return(
  //     <CircularProgress></CircularProgress>
  //   )
  // }

  const handelPendingChange = (id) => {
    const data = orders?.find((pd) => pd?._id === id);
    data.status = "Approved";
    // console.log(data);
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setIsLoading(true);
        }
      });
  };
  const handelDelete = (id) => {
    const procedd = window.confirm("Are you sure you want to delete?");
    if (procedd) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            swal("Good job!", "Deleted successfully", "success");
            const remaining = orders?.filter((product) => product._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <Container>
      {isLoading ? (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <table>
          <thead>
            <tr style={{ backgroundColor: "#28425b", color: "white" }}>
              <th scope="col">Watch Name</th>
              <th scope="col">User Name</th>

              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr>
                <td data-label="Watch Name">{order?.service?.title}</td>
                <td data-label="User Name">{order?.user}</td>

                <td data-label="Status">
                  <Button
                    onClick={() => handelPendingChange(order?._id)}
                    variant="outlined"
                  >
                    {order?.status}
                  </Button>
                </td>
                <td data-label="Delete">
                  <Button 
                       onClick={() => handelDelete(order?._id)}variant="outlined" color="error">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default ManageAllOrder;
