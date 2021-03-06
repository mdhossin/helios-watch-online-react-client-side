import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login/Login";
import Register from "./components/pages/Login/Register/Register";
import Navbar from "./components/pages/Shared/Navbar/Navbar";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home/Home";
import AuthProvider from "./components/context/AuthProvider/AuthProvider";
import PrivateRoute from "./components/pages/Login/PrivateRoute/PrivateRoute";
import AllServices from "./components/pages/AllServices/AllServices/AllServices";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import AdminRoute from "./components/pages/Login/AdminRoute/AdminRoute";
import Dashboard from "./components/pages/Home/Home/Dashboard/Dashboard";
import AboutUs from "./components/pages/AboutUs/AboutUs";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/allServices">
            <AllServices></AllServices>
          </Route>
          <PrivateRoute exact path="/allServices/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <AdminRoute path="/dashboard">
            <Dashboard></Dashboard>
          </AdminRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
