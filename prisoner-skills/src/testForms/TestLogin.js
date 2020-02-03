import React, { useState } from 'react';
import axios from 'axios';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Nav from '../components/universal/Nav'
import Footer from '../components/universal/Footer';

const TestLogin = () => {
  return (
    <div>
      <Nav />
      <h3>Login Form</h3>

      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={(values, tools) => {
          tools.resetForm();
          console.log(values);
          axios.post(`https://prisoner-skills-backend.herokuapp.com/api/auth/login`, values)
            .then(res => {
              // localStorage.setItem('TOKEN', res.data.token);
              // this.props.history.push('/profile')
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
        }}
        render={props => {
          return (
            <Form>
              <Field
                type="text"
                name="username"
                placeholder="username"
              />
              <Field
                type="password"
                name="password"
                placeholder="password"
              />
              <input type="submit" />
            </Form>
          )
        }}
      />

      <span>Don't have an account yet?</span> <span><Link to="/signup">Sign Up Here</Link></span>
      <Footer />
    </div>
  );
};

export default TestLogin;


/*
class TestLogin extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
    console.log(e.target.name, '=', e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Log in button clicked!')

    // axios.post(`https://prisoner-skills-backend.herokuapp.com/api/auth/login`, this.state.credentials)
      .then(res => {
        localStorage.setItem('TOKEN', res.data.token);
        // this.props.history.push('/profile')
      })
      .catch(err => {
        console.log(err)
      })

    this.setState({
      credentials: {
        username: '',
        password: ''
      }
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <h3>Login Form</h3>
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

          <button>Log In</button>
        </form>
        <span>Don't have an account yet?</span> <span><Link to="/signup">Sign Up Here</Link></span>
        <Footer />
      </div>
    );
  }
};

export default TestLogin;
*/