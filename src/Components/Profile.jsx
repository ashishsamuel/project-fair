import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';
import { editUserAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const [open, setOpen] = useState(false);
  const [userProfile,setUserProfile] = useState({
    username:"",email:"",password:"",profile:"",github:"",linkedin:""
  })
  // state to store already uploaded profile pic of user in db
  const [existingImage,setExistingImage] = useState("")
  // to set url of the uploaded profile pic 
  const [preview,setPreview] = useState("")

  useEffect(()=>{
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
      setExistingImage(user.profile)
  },[open])

  useEffect(()=>{
    if(userProfile.profile){
      setPreview(URL.createObjectURL(userProfile.profile))
    }else{
      setPreview("")
    }

  },[userProfile.profile])

  const handleProfileUpdate = async()=>{
    const {username,email,password,profile,github,linkedin} = userProfile
    if(!github || !linkedin){
      toast.info("Please fill the form completely")
    }else{
      const reqBody = new FormData()
      reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("password",password)
        reqBody.append("github",github)
        reqBody.append("linkedin",linkedin)
        preview?reqBody.append("profileImage",profile):reqBody.append("profileImage",existingImage)
        const token = sessionStorage.getItem("token")
        if(preview){
          const reqHeader = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          const res = await editUserAPI(reqBody,reqHeader)
          if(res.status === 200){
            setOpen(!open)
            sessionStorage.setItem("existingUser",JSON.stringify(res.data))
          }
          else{
            setOpen(!open)
            console.log(res);
            console.log(res.response.data);
          }
        }else{
          const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
          const res = await editUserAPI(reqBody,reqHeader)
          if(res.status === 200){
            setOpen(!open)
            sessionStorage.setItem("existingUser",JSON.stringify(res.data))
          }
          else{
            setOpen(!open)
            console.log(res);
            console.log(res.response.data);
          }
        }
    }
  }
  return (
    
      <div className='card shadow p-5'>
            <div className='d-flex align-items-center justify-content-between'>
                <h4>My Profile</h4>
                <button onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
          aria-expanded={open} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
            </div>
            <Collapse in={open}>
            <div className='row justify-content-center mt-3' id="example-collapse-text">
            <label className='text-center'>
                  <input style={{display:'none'}} type='file' onChange={(e)=>setUserProfile({...userProfile,profile:e.target.files[0]})}/>
                  {existingImage!=""?
                    <img src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} height={'150px'} width={'150px'} alt="upload picture" />
                    :<img src={preview?preview:"https://vectorified.com/images/business-avatar-icon-8.png"} height={'150px'} width={'150px'} alt="upload picture" />

                  }
            </label>
            <div className="mt-3">
              <input type="text" className='form-control' placeholder='GitHub' value={userProfile.github} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})}/>
            </div>
            <div className="mt-3">
              <input type="text" className='form-control' placeholder='LinkedIn' value={userProfile.linkedin} onChange={(e)=>setUserProfile({...userProfile,linkedin:e.target.value})}/>
            </div>
            <div className="mt-3">
              <button onClick={handleProfileUpdate} className='btn btn-info w-100'>Update</button>
            </div>
           
            </div>
            </Collapse>
            <ToastContainer position='top-right' theme='colored' autoClose='2000'/>
      </div>

  )
}

export default Profile
