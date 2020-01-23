import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  state = {
    msg: null,
    isAdmin : false,
    validationForAdminUser : localStorage.getItem('isAdmin')
  };
  componentDidMount=()=> {
    console.log(localStorage.getItem('isAdmin'))
  }
  
  register = async event => {
    event.preventDefault();
    let firstName = event.target["firstName"].value;
    let lastName = event.target["lastName"].value;
    let email = event.target["email"].value;
    let password = event.target["password"].value;
    let repassword = event.target["repassword"].value;
    const isAdmin =this.state.isAdmin 
    let newUser = { firstName, lastName, email, password, repassword , isAdmin };
    if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && repassword !== "" ){
    password === repassword
      ? axios.post("http://localhost:9000/register", newUser).then(res => {
          console.log(res.data);
          let user = res.data;
          localStorage.setItem("user_id", user._id);
          this.props.history.push("Home");
        })
      : this.setState({ msg: "Passwords didn't match" });
      }
    };

  render() {
    return (
      <div>
        <form onSubmit={this.register}>
          <input type="text" name="firstName" placeholder="First Name" />
          <br />
          <input type="text" name="lastName" placeholder="Last Name" />
          <br />
          <input type="email" name="email" placeholder="email" />
          <br />
          <input type="password" name="password" placeholder="password" />
          <br />
          <input
            type="password"
            name="repassword"
            placeholder="password Again"
          />
          <br />
          {localStorage.getItem('isAdmin') ? 
          <div>
          <label>do you want to create admin user ?? if so please check this checkbox -></label>
          <input type='checkBox'  name='isAdmin' checked={this.state.isAdmin} onChange={()=>this.setState({isAdmin : !this.state.isAdmin})}></input>
          </div>: <></>}
          <input type="submit" value="Register" /> 
        </form>
        <h1 >{ this.state.msg } </h1>
      </div>
    );
  }
}
