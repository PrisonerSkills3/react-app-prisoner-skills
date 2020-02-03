/*
Log in form should make a POST request to the endpoint the backend will give us that will authenticate the user with a token:

-username
-password
*/

import React from "react";
import "../styles/LoginForm.css";
import { Link } from "react-router-dom";
import Nav from "./universal/Nav";
import Footer from "./universal/Footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

//Yup validation
const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username of 3 characters minimum")
    .required("* Required Field"),
  password: Yup.string()
    .min(3, "Password of 3 characters minimum")
    .required("* Required Field")
});

const LogIn = () => {
  return (
    <div>
      <Nav />
      <h3>Login to Your Account</h3>
      {/* Formik values/validation */}
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, formikBag) => {
          console.log("Values", values);

          formikBag.resetForm();
          axios
            .post(
              "https://prisoner-skills-backend.herokuapp.com/api/auth/login",
              values
            )
            .then((res) => {
              console.log(res);
              localStorage.setItem('TOKEN', res.data.token);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="username">*Username: </label>
            <Field
              name="username"
              type="text"
              placeholder="username"
            />
            {errors.username && touched.username ? (
              <div className="errors">{errors.username}</div>
            ) : null}
            <br />

            <label htmlFor="password">*Password: </label>
            <Field
              name="password"
              type="password"
              placeholder="password"
            />
            {errors.password && touched.password ? (
              <div className="errors">{errors.password}</div>
            ) : null}
            <br />

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <span>Don't have an account yet?</span>{" "}
      <span>
        <Link to="/sign-up">Sign Up Here</Link>
      </span>
      <Footer />
    </div>
  );
};

export default LogIn;
