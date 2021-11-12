import React from "react";
import useAuth from "../../../../hooks/useAuth";
import AdminDashboard from "../../../AdminDashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../../../UserDashboard/UserDashboard/UserDashboard";

const Dashboard = () => {
  const { admin, user } = useAuth();
  return (
    <div>
      {user?.email && admin ? (
        <AdminDashboard></AdminDashboard>
      ) : (
        <div>{user?.email && <UserDashboard></UserDashboard>}</div>
      )}
    </div>
  );
};

export default Dashboard;
