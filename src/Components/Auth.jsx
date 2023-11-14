import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from '../Assets/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import Form from 'react-bootstrap/Form';

function Auth({register}) {
  const navigate =useNavigate()
  const [userData,setUserData] = useState({
    username:"",email:"",password:""
  })
    const isRegisterForm = register?true:false

    const handleRegister = async (e)=>{
      e.preventDefault()
      const {username,email,password} = userData
      if(!username || !email  || !password){
        toast.info("Please Fill the form completely")
      }
      else{
        const result = await registerAPI(userData)
        if(result.status === 200){
          toast.success(`${result.data.username} has registered successfully!!!`)
          setUserData({
            username:"",email:"",password:""
          })
          navigate('/login')
        }else{
          toast.warning(result.response.data)
          console.log(result);
        }
      }

    }

    const handleLogin = async (e)=>{
      e.preventDefault()
      const {email,password} = userData
      if(!email || !password){
        toast.info("Please Fill the form completely")
      }
      else{
        const result = await loginAPI(userData)
        if(result.status === 200){
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token",result.data.token)
          setUserData({
            email:"",password:""
          })
          navigate('/')
        }else{
          toast.warning(result.response.data)
          console.log(result);
        }
      }
    }
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="w-75 container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
        <i class="fa-solid fa-arrow-left"></i>Back to Home
        </Link>
        <div className="card shadow p-5 bg-info" style={{borderRadius:'15px'}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={login} className="rounded-start w-100" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-bolder text-dark mt-2">Project Fair</h1>
                <h5 className="fw-bolder mt-2 pb-3 text-dark">
                  {isRegisterForm
                    ? "Sign up to your Account"
                    : "Sign In to your Account"}
                </h5>
                <Form classtext-light w-100>
                  {isRegisterForm && (
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control
                      value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}
                        type="text"
                        placeholder="Enter the Username"
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Enter the Email Address"
                      value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fromBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Enter the Password"
                      value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}
                    />
                  </Form.Group>
                  {
                    isRegisterForm ? 
                    <div>
                        <button className='btn btn-primary mb-2' onClick={handleRegister}>Register</button>
                        <p>Already have Account? Click here to <Link to={'/login'} className='text-light fw-bold'>Login</Link></p>
                    </div>:
                    <div>
                        <button className='btn btn-primary mb-2' onClick={handleLogin}>Login</button>
                        <p>New User? Click here to <Link to={'/register'} className='text-light fw-bold'>Register</Link></p>
                    </div>
                  }
                </Form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-right' theme='colored' autoClose='2000'/>
    </div>
  );
}

export default Auth
