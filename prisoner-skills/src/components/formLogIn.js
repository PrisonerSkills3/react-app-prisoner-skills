/*
Log in form should make a POST request to the endpoint the backend will give us that will authenticate the user with a token:

-username
-password
*/

import React, { useState } from "react";
import "../styles/LoginForm.css";
import { Link } from "react-router-dom";
import Nav from "./universal/Nav";
import Footer from "./universal/Footer";
import { Formik, Form, Field } from "formik";
import Loader from "react-loader-spinner";
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
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="loginContainer">
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
          setIsLoading(true);
          formikBag.resetForm();
          axios
            .post(
              "https://prisoner-skills-backend.herokuapp.com/api/auth/login",
              values
            )
            .then((res) => {
              console.log(res);
              localStorage.setItem("TOKEN", res.data.token);
              setIsLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
            });
        }}
      >
        {({ errors, touched }) => (
          <div>
            {isLoading ? (
              <Loader type="TailSpin" color="#3EC2CF" height={50} width={50} />
            ) : (
              <Form>
                <Field name="username" type="text" placeholder="Username" />
                {errors.username && touched.username ? (
                  <div className="errors">{errors.username}</div>
                ) : null}
                <br />

                <Field name="password" type="password" placeholder="Password" />
                {errors.password && touched.password ? (
                  <div className="errors">{errors.password}</div>
                ) : null}
                <br />

                <button type="submit">Login</button>
              </Form>
            )}
          </div>
        )}
      </Formik>

      <div className="noAccountDiv">
        <span>Don't have an account yet?</span>{" "}
        <span>
          <Link to="/sign-up">Sign Up Here</Link>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
