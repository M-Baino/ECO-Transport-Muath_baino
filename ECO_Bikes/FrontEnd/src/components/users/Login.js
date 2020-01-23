import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    msg: null
  };

  login = async event => {
    event.preventDefault();
    let email = event.target["email"].value;
    let password = event.target["password"].value;

    let user = { email, password };
    axios.post("http://localhost:9000/login", user).then(res => {
      console.log(res.data);
      let user = res.data;
      if (user === null) {
        this.setState({ msg: "Wrong Username or Password " });
      } else {
        localStorage.setItem("user_id", user._id);
        if(res.data.isAdmin){
        localStorage.setItem('isAdmin' , res.data.isAdmin)
        }
        this.props.history.push("Home");
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input type="email" name="email" placeholder="Email or Username" />
          <br />
          <br />

          <input type="password" name="password" placeholder="password" />
          <br />
          <br />

          <input type="submit" value="Login" />
        </form>
        <h1> {this.state.msg} </h1>
      </div>
    );
  }
}
