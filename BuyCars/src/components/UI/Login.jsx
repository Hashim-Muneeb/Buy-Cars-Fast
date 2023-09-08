import React, { Component } from "react";
import Helmet from "../Helmet/Helmet";
import CommonSection from "./CommonSection";
import { Container } from "reactstrap";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("mongodb://localhost:27017/Signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "UserRegister");
        if (data.status === "ok") {
          alert("Login SuccessFully");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userBooking";
        }
      });
  }

  render() {
    return (
      <Helmet title="Login">
      <CommonSection title="Login"></CommonSection>
      
      <section>
        <Container>
      <form onSubmit={this.handelSubmit}>
        <h3>LogIn </h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        
      </form>
      </Container>
      </section>
      </Helmet>
    );
  }
}
