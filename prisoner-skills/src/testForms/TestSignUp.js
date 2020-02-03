import React from 'react';
import axios from 'axios';
import Footer from '../components/universal/Footer';
import Nav from '../components/universal/Nav';
import {Link} from 'react-router-dom';

class TestSignUp extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      email: "",
      prison_name: "",
      number_of_prisoners: "",
      prison_address: ""
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    console.log(e.target.name, '=', e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('register button clicked')

    axios.post(`https://prisoner-skills-backend.herokuapp.com/api/auth/register`, this.state.credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

    this.setState({
      credentials: {
        username: "",
        password: "",
        email: "",
        prison_name: "",
        number_of_prisoners: "",
        prison_address: ""
      }
    })
  }

  render(){
    return (
      <div>
        <Nav />
        <h3>Sign Up Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="text"
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
        <span>Already have an account yet?</span> <span><Link to="/login">Log In Here</Link></span>
        <Footer />
      </div>
    );
  }
};

export default TestSignUp;