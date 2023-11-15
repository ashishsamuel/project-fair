import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <>
      <Header/>
      <div className='projects' style={{margintop:'100px'}}>
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className='d-flex flex-column justify-content-center align-items-center w-100'>
          <div className='mt-3 d-flex border align-items-center w-50'>
            <input type="text" className='form-control' placeholder='search projects by technologies used'/>
            <i style={{marginLeft:'-30px'}} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <Row className='mt-5 container-fluid'>
          <Col sm={12} lg={4} md={4}>
            <ProjectCard/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Projects
