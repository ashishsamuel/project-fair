import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

// register user 
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login user 
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// add project
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

// get home projects 
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")
}

//get all projects
export const allProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all`,"",reqHeader)
}