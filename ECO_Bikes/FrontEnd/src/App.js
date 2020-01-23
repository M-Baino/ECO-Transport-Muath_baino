import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import Home from "./components/website/Home";
import Header from "./components/website/Header";
// import Footer from "./components/website/Footer";
import Search from "./components/website/Search";
import AboutUs from "./components/website/AboutUs";

import Bikes from "./components/bikes/Bikes";
import Bike from "./components/bikes/Bike";
import AddBike from "./components/bikes/AddBike";
import Hardware from "./components/bikes/Hardware";
import Accessories from "./components/bikes/Accessories";

import Register from "./components/users/Register";
import Login from "./components/users/Login";
import Logout from "./components/users/Logout";
import UserProfile from "./components/users/UserProfile";
import AdminDashboard from "./components/users/AdminDashboard";

import Cart from "./components/buy/Cart";
import Checkout from "./components/buy/Checkout";

export default class App extends Component {
  state = {
    user: null
  };

  UNSAFE_componentWillMount() {
    this.getUser();
  }

  getUser = () => {
    let _id = localStorage.getItem("user_id");
    console.log(_id);
      axios.post("http://localhost:9000/getUser", { _id }).then(res => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Header />
          {localStorage.getItem('isAdmin') && 
          <Route path='/AdminDashboard' 
          component={routerProps => <AdminDashboard {...routerProps} />}></Route>}
          <Route
            exact={true} path="/"
            component={Home}
          ></Route>
          <Route
            path="/Search"
            component={routerProps => <Search {...routerProps} />}
          ></Route>
          <Route
            path="/AboutUs"
            component={routerProps => <AboutUs {...routerProps} />}
          ></Route>
          <Route
            path="/Bikes"
            component={routerProps => <Bikes {...routerProps} />}
          ></Route>
          <Route
            path="/Bike"
            component={routerProps => <Bike {...routerProps} />}
          ></Route>
          <Route
            path="/AddBike"
            component={routerProps => <AddBike {...routerProps} />}
          ></Route>
          <Route
            path="/Hardware"
            component={routerProps => <Hardware {...routerProps} />}
          ></Route>
          <Route
            path="/Accessories"
            component={routerProps => <Accessories {...routerProps} />}
          ></Route>
          <Route
            path="/Register"
            component={routerProps => <Register {...routerProps} />}
          ></Route>
          <Route
            path="/Login"
            component={routerProps => <Login {...routerProps} />}
          ></Route>
          <Route
            path="/Logout"
            component={routerProps => <Logout {...routerProps} />}
          ></Route>
          <Route
            path="/UserProfile"
            component={routerProps => <UserProfile {...routerProps} />}
          ></Route>
        
          <Route
            path="/Cart"
            component={routerProps => <Cart {...routerProps} />}
          ></Route>
          <Route
            path="/Checkout"
            component={routerProps => <Checkout {...routerProps} />}
          ></Route>
          {/* <Footer /> */}
        </Router>
        
      </div>
    );
  }
}
