import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorizationContext } from '../Contexts/TokenAuth'

function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorizationContext)
  const navigate = useNavigate()

  const handleLogout = ()=>{
    // remove all existing user details from browser's session storage
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')
  }

  return (
    <Navbar expand="lg" className="bg-info">
    <Container>
      <Navbar.Brand><Link className='fw-bolder text-light' 
      to={'/'} style={{textDecoration:'none'}}>Project Fair
      </Link></Navbar.Brand>
      { insideDashboard &&
      <Button onClick={handleLogout} className='btn btn-dark rounded'>Log out</Button>
      }
    </Container>
  </Navbar>
  )
}

export default Header
