import axios from 'axios';

export const FETCH_PRISONS_START = 'FETCH_PRISONS_START';
export const FETCH_PRISONS_SUCCESS = 'FETCH_PRISONS_SUCCESS';
export const FETCH_PRISONS_FAILURE = 'FETCH_PRISONS_FAILURE';

export const fetchPrisons = () => {
  return dispatch => {
    dispatch({
      type: FETCH_PRISONS_START
    })

    axios.get(`https://prisoner-skills-backend.herokuapp.com/api/prisons`)
      .then(res => {
        dispatch({
          type: FETCH_PRISONS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_PRISONS_FAILURE,
          payload: err
        })
      })
  }
}