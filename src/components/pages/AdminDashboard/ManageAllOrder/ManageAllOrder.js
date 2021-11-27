import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import swal from "sweetalert";
import "./ManageAllOrder.css";
// manage all order page
const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://pure-headland-43911.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  // change the status
  const handelPendingChange = (id) => {
    const data = orders?.find((pd) => pd?._id === id);
    data.status = "Shipped";
    fetch(`https://pure-headland-43911.herokuapp.com/orders/${id}`, {
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
  // delete single order when onclick
  const handelDelete = (id) => {
    const procedd = window.confirm("Are you sure you want to delete?");
    if (procedd) {
      fetch(`https://pure-headland-43911.herokuapp.com/orders/${id}`, {
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
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#444444",
          textAlign: "center",
          mb: 2,
        }}
        component="div"
      >
        Manage All Orders
      </Typography>
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
              <tr key={order?._id}>
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
                    onClick={() => handelDelete(order?._id)}
                    variant="outlined"
                    color="error"
                  >
                     <DeleteIcon sx={{fontSize: '22px', mr: 0.5}} />
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
