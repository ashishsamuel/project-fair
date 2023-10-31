import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8} lg={8} xl={8}>
          <h2>Welcome <span className='text-primary'>User</span></h2>
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
