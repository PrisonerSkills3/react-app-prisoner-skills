/*
Will need to display the details of the prison in a contained format (like a card)
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PrisonCard.css';

const PrisonCard = (props) => {
  return (
    <div className="cardContainer">
      {props.prisons.map((prison) => {
        return (
          <Link to={`/prison-profile/${prison.id}`} key={prison.prison_name}>
            <div className="prisonCard">
              <img className="prisonImage" src={prison.image_url} alt="" />
              <h4>{prison.prison_name}</h4>
              <p>{prison.prison_address}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PrisonCard;
