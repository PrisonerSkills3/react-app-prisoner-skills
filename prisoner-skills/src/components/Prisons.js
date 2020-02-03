import React from 'react';
import PrisonCard from './PrisonCard';
import '../styles/Prisons.css';
import { connect } from 'react-redux';
import { fetchPrisons } from '../actions/fetchPrisons';

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

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  prison_name: state.prison_name,
  number_of_prisoners: state.number_of_prisoners,
  prison_address: state.prison_address,
  inmates: state.inmates
})

export default connect(mapStateToProps, { fetchPrisons })(Prisons);