import React, { useEffect, useState,useContext } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare';
import EditProject from './EditProject';

function MyProjects() {
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
  const [userProjects,setUserProjects] = useState([])

  const getUserProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await userProjectAPI(reqHeader)
      if(result.status ===200){
        setUserProjects(result.data)
      }else{
        console.log(result);
        toast.warning(result.response.data)
      }
    }
  }

  const handleDelete = async (id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
   const result = await deleteProjectAPI(id,reqHeader)
   if(result.status === 200){
    getUserProjects()
   }else{
    toast.error(result.response.data)
   } 

  }

  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse,editProjectResponse])

  return (
    <div className='card shadow p-3 mt-3'>
      <div className='d-flex'>
        <h2>My Projects</h2>
        <div className='ms-auto'><AddProject/></div>
      </div>
      <div className='mt-4'>
    {/* collection of user projects */}
    {userProjects?.length>0?userProjects.map(project=>(
      <div className='border d-flex align-items-center rounded p-2'>
      <h5>{project.title}</h5>
      <div className='icon ms-auto'>
          <EditProject project={project}/>
          <a href={`${project.github}`} target='_blank' className='btn'><i class="fa-brands fa-github fa-2x"></i></a>
          <button className='btn' onClick={()=>handleDelete(project._id)}><i class="fa-solid fa-trash fa-2x"></i></button>
      </div>
  </div>
    )):
      
    <p className='text-danger fw-bolder fs-5 mt-2'>No Projects Uploaded Yet !!!</p>
    }
      </div>
      <ToastContainer position='top-right' theme='colored' autoClose='2000'/>

    </div>
  )
}

export default MyProjects
