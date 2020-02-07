/*
Prison profile will need to get data from the backend and display it to the dom by making a GET request

-image
-prison name
-address

-list of inmates that the prison has created

-create new profile for inmate form or link to the form
*/

import React, { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import Nav from "./universal/Nav";
import Footer from "./universal/Footer";
import trashIcon from "../icons/trashIcon.png";
import editIcon from "../icons/editIcon.png";
import profileAvi from '../icons/profileAvi.png';
import waypoint from '../icons/waypoint.png';
import "../styles/PrisonProfile.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const PrisonProfile = () => {
  let { prisonId } = useParams();
  let match = useRouteMatch();

  const [prison, setPrison] = useState([]);

  const initialInmate = {
    prisoner_name: "",
    prisoner_availability: false,
    prisoner_skills: "",
    prison_id: parseInt(prisonId)
  };

  const [editing, setEditing] = useState(false);

  const [inmateToEdit, setInmateToEdit] = useState(initialInmate);

  //erik GET request
  useEffect(() => {
    axios
      .get(
        `https://prisoner-skills-backend.herokuapp.com/api/prisons/${prisonId}/prisoners`
      )
      .then((res) => {
        setPrison(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [prisonId]);
  console.log("prison: ", prison);

  const editInmate = (inmate) => {
    setEditing(!editing);
    setInmateToEdit(inmate);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    console.log("save button clicked");
    const payload = {
      prisoner_name: inmateToEdit.prisoner_name,
      prisoner_availability:
        inmateToEdit.prisoner_availability === 1 ? true : false,
      prisoner_skills: inmateToEdit.prisoner_skills,
      prison_id: inmateToEdit.prison_id
    };
    console.log("payload", payload);
    axiosWithAuth()
      .put(`/api/auth/edit-prisoner/${inmateToEdit.id}`, payload)
      .then((res) => {
        console.log("resolved data", res);
        setEditing(!editing);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deleteInmate = (id) => {
    axiosWithAuth()
      .delete(`/api/auth/delete-prisoner/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Nav />
      <h2>Prison profile # {prisonId}</h2>

      {prison.map((item) => {
        return (
          <div key={item.id} className="inmateCard">
            <div className="imgBox">
              <img src={profileAvi} className="inmateImage" />
              <div className="location">
                <span><img src={waypoint} className="waypoint" /></span>
                <span className="inmatesPrisonName">{item.prison_name}</span>
              </div>
            </div>


            <div className="outterBox">
              <div className="nameSchedule">
                <p className="inmateName">
                  <span className="bold">Name:</span> 
                  <span>
                    {item.prisoner_name}
                  </span>
                </p>
                <p className="inmateAvail">
                  <span className="bold">Availability:</span>
                  <span>
                  {item.prisoner_availability === 0
                    ? "Not available for work leave"
                    : "Available for work leave"}
                  </span>
                </p>
              </div>
              <div className="skillsBox">
                <p className="inmateSkills">
                  <span className="bold">Skills:</span> 
                  <span>
                    {item.prisoner_skills}
                  </span>
                </p>
              </div>
            </div>


            <div className="iconBox">
              <div
                className="editIcon"
                onClick={(e) => {
                  e.preventDefault();
                  editInmate(item);
                  console.log(editing);
                  console.log("edit clicked -- inmate to edit: ", inmateToEdit);
                }}
              >
                <img src={editIcon} alt="" />
              </div>
              <div
                className="trashIcon"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("delete clicked");
                  deleteInmate(item.id);
                }}
              >
                <img src={trashIcon} alt="" />
              </div>
            </div>
          </div>
        );
      })}

      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Inmate</legend>
          <label>
            Inmates Name:
            <input
              onChange={(e) => {
                setInmateToEdit({
                  ...inmateToEdit,
                  prisoner_name: e.target.value
                });
              }}
              value={inmateToEdit.prisoner_name}
            />
          </label>

          <label>
            Work Leave?
            <input
              onChange={(e) => {
                setInmateToEdit({
                  ...inmateToEdit,
                  prisoner_availability: e.target.value
                });
              }}
              value={inmateToEdit.prisoner_availability}
            />
          </label>

          <label>
            Inmates Skills:
            <input
              onChange={(e) => {
                setInmateToEdit({
                  ...inmateToEdit,
                  prisoner_skills: e.target.value
                });
              }}
              value={inmateToEdit.prisoner_skills}
            />
          </label>
          <button>Save</button>
        </form>
      )}

      <Link to={`${match.url}/add-inmate`} className="addInmateBtn">➕ Add New Inmate</Link>
      <Footer />
    </div>
  );
};

export default PrisonProfile;
