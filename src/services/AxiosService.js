import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 8000,
  params: {
    api_key: 'mZId6q42Cfir18kTvvwgCnPhI2KfMdZ9vAR6jVrj'
  
  }
})
