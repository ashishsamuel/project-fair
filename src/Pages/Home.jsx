import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assets/designer1.gif'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  const [loggedIn,setLoggedIn] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  },[])
  return (
    <>
    {/* landing section */}
      <div style={{width:'100%',height:'100vh'}} className='container-fluid rounded bg-info'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'>Project Fair</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque, quaerat laborum excepturi error provident officia doloremque id beatae perferendis maxime vitae qui? Iure deleniti voluptatem eos labore doloremque qui!</p>
           {loggedIn ? <Link to={'/dashboard'} className='btn btn-primary'>Manage your Projects</Link>
            :<Link to={'/login'} className='btn btn-primary'>Start to Explore</Link>}
          </Col>
          <Col sm={12} md={6}>
            <img style={{marginTop:'100px'}} src={titleImage} alt="" className='w-75' />
          </Col>
        </Row>
      </div>
    {/*all projects  */}
    <div className='bg-secondary'>
      <h1 className="text-center mb-5">Explore our Projects</h1>
    <marquee scrollAmount={25}>
      <div className='d-flex justify-content-between'>
        <div style={{width:'500px'}}>
          <ProjectCard/>
        </div>
      </div>
    </marquee>
    <div className='text-center mt-5'>
      <Link to={"/projects"}>View More Projects</Link>
    </div>
    </div>
    </>
  )
}

export default Home
