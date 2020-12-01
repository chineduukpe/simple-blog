import axios from 'axios'
import {objectToSingleArray} from "./helpers";

export const pharmacareAPI = axios.create({
    // baseURL: 'http://localhost:8000/api/v1',
    baseURL: 'ec2-18-220-223-194.us-east-2.compute.amazonaws.com/api/v1',
    responseType: "json",
});

pharmacareAPI.interceptors.request.use(req => {
    //APPEND AUTHORIZATION TOKEN TO ALL REQUEST
    const user = localStorage.getItem('pc_user');
    req.headers.common.Authorization = `Bearer ${user ? JSON.parse(user).access_token : "" } `
    return req;
})

pharmacareAPI.interceptors.response.use(res => {
    console.log(res.response)
    return res
},
    error => {
        throw error;
    })
