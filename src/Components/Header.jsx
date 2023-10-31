import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <Navbar expand="lg" className="bg-info">
    <Container>
      <Navbar.Brand><Link className='fw-bolder text-light' 
      to={'/'} style={{textDecoration:'none'}}>Project Fair
      </Link></Navbar.Brand>
      { insideDashboard &&
      <Button className='btn btn-dark rounded'>Log out</Button>
      }
    </Container>
  </Navbar>
  )
}

export default Header
