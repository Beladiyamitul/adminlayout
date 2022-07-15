import axios from 'axios';
import { BASE_URL } from '../shared/baseUrl';


const axiosinstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
  
  });


export const sendRequest = (config) =>{
  return axiosinstance.request(config)
}  

export const getRequest = (path) =>{
  return sendRequest({
    url : path,
    method : 'GET'
  })
}

export const getPost = (path) =>{
  return sendRequest({
    url : path,
    method : 'POST'
  })
}
