import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../../hooks/useAuth";
import AdminDashboard from "../../../AdminDashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../../../UserDashboard/UserDashboard/UserDashboard";
// dashborad page
const Dashboard = () => {
  const { admin, user } = useAuth();
  return (
    <div>
      {user?.email && admin ? (
        <AdminDashboard></AdminDashboard>
      ) : (
        <Box>{user?.email && <UserDashboard></UserDashboard>}</Box>
      )}
    </div>
  );
};

export default Dashboard;
