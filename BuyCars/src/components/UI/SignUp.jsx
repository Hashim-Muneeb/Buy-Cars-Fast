import React, { Component } from "react";
import Helmet from "../Helmet/Helmet";
import CommonSection from "./CommonSection";
import { Container } from "reactstrap";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("mongodb://localhost:27017/Signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Register Successfully...");
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <Helmet title="Sign Up">
      <CommonSection title="Sign Up"></CommonSection>
      
      <section>
      <Container>
      <form onSubmit={this.handelSubmit}>
        <h3>Sign Up For New Account </h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

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
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
      </Container>
      </section>
      </Helmet>
    );
  }
}
