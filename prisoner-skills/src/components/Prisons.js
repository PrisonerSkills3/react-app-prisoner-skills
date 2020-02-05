import React from 'react';
import PrisonCard from './PrisonCard';
import '../styles/Prisons.css';
import { connect } from 'react-redux';
import { fetchPrisons } from '../actions/fetchPrisons';

const Prisons = props => {

  return (
    <div className="prisonGrid">
      <button onClick={props.fetchPrisons}>View Prisons</button>
      <PrisonCard prisons={props.prisons} />
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  prisons: state.prisons
})

export default connect(mapStateToProps, { fetchPrisons })(Prisons);