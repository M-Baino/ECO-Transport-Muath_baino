import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="navbar-nav list-group list-group-horizontal">
            <li className="list-group-item">
              <Link to="/">ECO</Link>
            </li>
            {/* <li className="list-group-item"><Link to="/Bikes">Bikes</Link></li> */}
            {/* <li className="list-group-item"><Link to="/Accessories">Accessories</Link></li> */}
            {/* <li className="list-group-item"><Link to="/AboutUs">AboutUs</Link></li> */}
            {/* <li className="list-group-item"><Link to="/Search">Search</Link></li> */}
            {/* <li className="list-group-item"><Link to="/Cart">Cart</Link></li> */}
            <li className="list-group-item">
              <Link to="/AddBike">AddBike</Link>
            </li>

            {localStorage.getItem("user_id") !== "null" ? (
              <li className="list-group-item">
                <Link to="/Logout">Logout</Link>
              </li>
            ) : (
              <>
                <li className="list-group-item">
                  <Link to="/Login">Login</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Register">Register</Link>
                </li>
              </>
            )}

            {/* <li className="list-group-item"><Link to="/UserProfile">UserProfile</Link></li> */}
            {/* <li className="list-group-item"><Link to="/AdminDashboard">AdminDashboard</Link></li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
