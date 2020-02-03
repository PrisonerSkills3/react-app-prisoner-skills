import {
  FETCH_PRISONS_START,
  FETCH_PRISONS_SUCCESS,
  FETCH_PRISONS_FAILURE
} from '../actions/fetchPrisons';

const initialState = {
  isLoading: false,
  error: '',
  prison_name: '',
  number_of_prisoners: '',
  prison_address: '',
  inmates: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PRISONS_START:
      return{
        ...state,
        isLoading: true,
        error: ''
      }

    default:
      return state
  }
}