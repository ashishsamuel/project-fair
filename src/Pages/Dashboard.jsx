import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8} lg={8} xl={8}>
          <h2>Welcome <span className='text-primary'>{username}</span></h2>
          {/* my project */}
          <MyProjects/>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
        {/* my profile */}
        <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
