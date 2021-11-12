import { Button, CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://mighty-bastion-35979.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [isLoading]);


  const handelPendingChange = (id) => {
    const data = orders?.find((pd) => pd?._id === id);
    data.status = "Approved";
    // console.log(data);
    fetch(`https://mighty-bastion-35979.herokuapp.com/orders/${id}`, {
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
      fetch(`https://mighty-bastion-35979.herokuapp.com/orders/${id}`, {
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
