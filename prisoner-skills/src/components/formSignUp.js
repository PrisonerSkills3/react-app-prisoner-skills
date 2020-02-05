import React from "react";
import "../styles/SignUpForm.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./universal/Nav";
import Footer from "./universal/Footer";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class SignUp extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      email: "",
      prison_name: "",
      number_of_prisoners: "",
      prison_address: ""
    }
  };

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("register button clicked");

    axios
      .post(
        `https://prisoner-skills-backend.herokuapp.com/api/auth/register`,
        this.state.credentials
      )
      .then((res) => {
        console.log(res);
        this.props.history.push("/log-in");
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      credentials: {
        username: "",
        password: "",
        email: "",
        prison_name: "",
        number_of_prisoners: "",
        prison_address: ""
      }
    });
  };

  render() {
    return (
      <div className="signupContainer">
        <Nav />
        <h3 className="headerForms">Sign Up For An Account</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.credentials.email}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="prison_name"
            placeholder="Prison Name"
            value={this.state.credentials.prison_name}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="number_of_prisoners"
            placeholder="# of Inmates"
            value={this.state.credentials.number_of_prisoners}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="prison_address"
            placeholder="Prison Address"
            value={this.state.credentials.prison_address}
            onChange={this.handleChanges}
          />

          <button>Register</button>
        </form>
        <div className="haveAccountDiv">
          <span>Already have an account yet?</span>{" "}
          <span>
            <Link to="/log-in">Log In Here</Link>
          </span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
