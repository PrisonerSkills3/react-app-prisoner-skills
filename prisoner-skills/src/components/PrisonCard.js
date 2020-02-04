/*
Will need to display the details of the prison in a contained format (like a card)
*/

import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import PrisonProfile from './PrisonProfile';
import '../styles/PrisonCard.css';

const PrisonCard = props => {
  return (
    <div>
      {props.prisons.map(prison => {
        return (
          <Link to={`/prison-profile/${prison.id}`} key={prison.prison_name}>
            <div className="prisonCard">
              <h4>{prison.prison_name}</h4>
              <p>{prison.prison_address}</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
};

export default PrisonCard;