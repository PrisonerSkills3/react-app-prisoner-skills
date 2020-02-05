/*
Prison profile will need to get data from the backend and display it to the dom by making a GET request

-image
-prison name
-address

-list of inmates that the prison has created

-create new profile for inmate form or link to the form
*/

import React, { useState, useEffect } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import '../styles/PrisonProfile.css';
import axios from 'axios';
import Nav from './universal/Nav';
import Footer from './universal/Footer';

const PrisonProfile = () => {
  let { prisonId } = useParams();
  let match = useRouteMatch();
  const [prison, setPrison] = useState([]);

  //erik GET request
  useEffect(() => {
    axios.get(`https://prisoner-skills-backend.herokuapp.com/api/prisons/${prisonId}/prisoners`)
      .then(res => {
        setPrison(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [prisonId])
  console.log(prison)

  return (
    <div>
      <Nav />
      <h2>Prison profile # {prisonId}</h2>
      {prison.map(item => {
        return item.prisoner_name
      })}
      <Link to={`${match.url}/add-inmate`}>Add New Inmate</Link>
      <Footer />
    </div>
  );
};

export default PrisonProfile;


