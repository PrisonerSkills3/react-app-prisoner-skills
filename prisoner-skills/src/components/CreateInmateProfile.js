/*
Make a POST request to the endpoint the back end gives us to cretae a new inmate

-photo
-inmates name
-skills
-schedule
*/


import React from 'react';
import Nav from './universal/Nav';
import Footer from './universal/Footer';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Formik, Form, Field } from 'formik';
import { useParams } from 'react-router-dom';
import '../styles/CreateInmateProfile.css';

const CreateInmateProfile = (props) => {
  const {prisonId} = useParams();
  console.log(prisonId);

  return (
    <div>
      <h1>Create Inmate Profile</h1>
      <Formik
        initialValues={{
          prisoner_name: '',
          prisoner_availability: '',
          prisoner_skills: ''
        }}
        onSubmit={(values, formikBag) => {
          formikBag.resetForm();
          const payload = {
            prisoner_name: values.prisoner_name,
            prisoner_availability: values.prisoner_availability === 'Yes' ? true : false,
            prisoner_skills: values.prisoner_skills,
            prison_id: parseInt(prisonId)
          };
          console.log(payload);
          axiosWithAuth().post("/api/auth/add-prisoner", payload)
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
      {({ errors, touched }) => (
          <div>
            <Nav />
            <Form>
              <label htmlFor="prisoner_name">*Inmate Name: </label>
              <Field
                name="prisoner_name"
                type="text"
                placeholder="name"
              />

              <label htmlFor="prisoner_availability">*Work Leave: </label>
              <Field name="prisoner_availability" as="select">
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </Field>

              <label htmlFor="prisoner_availability">*Skills: </label>
              <Field
                name="prisoner_skills"
                type="text"
                placeholder="skills"
              />

              <button type="submit">Add Inmate</button>
            </Form>
          </div>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default CreateInmateProfile;