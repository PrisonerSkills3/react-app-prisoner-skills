import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://prisoner-skills-backend.herokuapp.com',
    headers: {
      authorization: localStorage.getItem('TOKEN')
    }
  })
}