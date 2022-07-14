import axios from 'axios';
import { BASE_URL } from '../shared/baseUrl';


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
  
  });


const sendRequest = (config) =>{

}  