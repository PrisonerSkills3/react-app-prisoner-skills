/*
Will need to display the details of the prison in a contained format (like a card)
*/

import React from 'react';
import '../styles/PrisonCard.css';

const PrisonCard = props => {
  return (
    <div key={props.prison_name} className="prisonCard">
      <h4>{props.prison_name}</h4>
      {props.inmates.map(person => {
        return (
          <div key={person.name}>
            <p className="inmateName">{person.name}</p>
            {person.skills.map(skill => {
              return <span key={skill} className="skill">{skill}</span>
            })}
          </div>
        )
      })}
    </div>
  );
};

export default PrisonCard;