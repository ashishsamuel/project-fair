import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../Services/allAPI'

function Projects() {
  const [allProjects,setAllProjects] = useState([])
  const [searchKey,setSearchKey] = useState("")

  const getallProjects = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await allProjectsAPI(searchKey,reqHeader)
      if(result.status ===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }

  useEffect(()=>{
    getallProjects()
  },[searchKey])
  return (
    <>
      <Header/>
      <div className='projects' style={{margintop:'100px'}}>
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className='d-flex flex-column justify-content-center align-items-center w-100'>
          <div className='mt-3 d-flex border align-items-center w-50'>
            <input type="text" className='form-control' value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} placeholder='search projects by technologies used'/>
            <i style={{marginLeft:'-30px'}} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <Row className='mt-5 container-fluid'>
          {
          allProjects?.length>0?allProjects.map((project)=>(
             <Col sm={12} lg={4} md={4}>
             <ProjectCard project={project}/>
           </Col>
          )):<p style={{fontSize:'50px'}} className='fw-bolder text-danger m-5 text-center'>Please Login to view all projects!!!</p>
          }
        </Row>
      </div>
    </>
  )
}

export default Projects
