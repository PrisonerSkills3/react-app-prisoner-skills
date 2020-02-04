import {
  FETCH_PRISONS_START,
  FETCH_PRISONS_SUCCESS,
  FETCH_PRISONS_FAILURE
} from '../actions/fetchPrisons';

const initialState = {
  isLoading: false,
  error: '',
  prisons: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PRISONS_START:
      return{
        ...state,
        isLoading: true,
        error: ''
      }

    case FETCH_PRISONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        prisons: action.payload
      }

    case FETCH_PRISONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state
  }
}