import axios from 'axios';
import { useParams } from 'react-router-dom';

export const FETCH_A_PRISON_START = 'FETCH_A_PRISON_START';
export const FETCH_A_PRISON_SUCCESS = 'FETCH_A_PRISON_SUCCESS';
export const FETCH_A_PRISON_FAILURE = 'FETCH_A_PRISON_FAILURE';

export const fetchAPrison = () => {
  const { prisonId } = useparams();
  return dispatch => {
    dispatch({
      type: FETCH_A_PRISON_START
    })

    axios.get(`https://prisoner-skills-backend.herokuapp.com/api/prisons/${prisonId}/prisoners`)
      .then(res => {
        dispatch({
          type: FETCH_A_PRISON_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_A_PRISON_FAILURE,
          payload: res.data
        })
      })
  }
}