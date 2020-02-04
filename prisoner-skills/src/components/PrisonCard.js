/*
Will need to display the details of the prison in a contained format (like a card)
*/

import React from 'react';
import '../styles/PrisonCard.css';

const PrisonCard = props => {
  return (
    <div>
      {props.prisons.map(prison => {
        return (
          <div className="prisonCard" key={prison.prison_name}>
            <h4>{prison.prison_name}</h4>
            <p>{prison.prison_address}</p>
          </div>
        )
      })}
    </div>
  );
};

export default PrisonCard;