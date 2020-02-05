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
import axios from 'axios';
import Nav from './universal/Nav';
import Footer from './universal/Footer';
import trashIcon from '../icons/trashIcon.png';
import editIcon from '../icons/editIcon.png';
import '../styles/PrisonProfile.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';


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

  const deleteInmate = (id) => {
    axiosWithAuth().delete(`/api/auth/delete-prisoner/${id}`)
      .then(res => {
        console.log(res)
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Nav />
      <h2>Prison profile # {prisonId}</h2>
      {prison.map(item => {
        return (
          <div key={item.id}>
            <p>{item.prisoner_name}</p>
            <p>{item.prisoner_availability === 0 ? "Not available for work leave" : "Available for work leave"}</p>
            <p>{item.prisoner_skills}</p>
            <div className="iconBox">
              <div className="trashIcon" onClick={(e) => {
                e.preventDefault();
                console.log('delete clicked');
                deleteInmate(item.id);
              }}><img src={trashIcon}  alt="" /></div>
              <div className="editIcon" onClick={(e) => {
                e.preventDefault();
                console.log('edit clicked');
              }}><img src={editIcon}  alt="" /></div>
            </div>
          </div>
        )
      })}
      <Link to={`${match.url}/add-inmate`}>Add New Inmate</Link>
      <Footer />
    </div>
  );
};

export default PrisonProfile;


