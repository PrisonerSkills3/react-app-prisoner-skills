import React from 'react';
import PrisonCard from './PrisonCard';
import '../styles/Prisons.css';

const Prisons = ({ data }) => {
  return (
    <div className="prisonGrid">
      {data.map(prison => {
        return (
          <PrisonCard
            key={prison.prison_name}
            prison_name={prison.prison_name}
            number_of_prisoners={prison.number_of_prisoners}
            prison_address={prison.prison_address}
            inmates={prison.inmates}
          />
        )
      })}
    </div>
  );
};

export default Prisons;