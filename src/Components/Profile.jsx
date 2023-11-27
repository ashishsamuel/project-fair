import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';

function Profile() {
  const [open, setOpen] = useState(false);
  const [userProfile,setUserProfile] = useState({
    username:"",email:"",password:"",profile:"",github:"",linkedin:""
  })
  const [existingImage,setExistingImage] = useState("")
  const [preview,setPreview] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("exisitingUser")){
      const user = JSON.parse(sessionStorage.getItem("exisitingUser"))
      setUserProfile({...userProfile,username:user.username,email:user.email,profile:"",github:user.github,linkedin:user.linkedin})
    }else{
      setExistingImage("https://vectorified.com/images/business-avatar-icon-8.png")
    }
  },[])

  useEffect(()=>{
    if(userProfile.profile){
      setPreview(URL.createObjectURL(userProfile.profile))
    }else{
      setPreview("")
    }

  },[userProfile.profile])

  const handleUpdate = async()=>{

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
                  <img src={preview?`${BASE_URL}/uploads/${existingImage}`:existingImage} height={'150px'} width={'150px'} alt="upload picture" />
            </label>
            <div className="mt-3">
              <input type="text" className='form-control' placeholder='GitHub' value={userProfile.github} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})}/>
            </div>
            <div className="mt-3">
              <input type="text" className='form-control' placeholder='LinkedIn' value={userProfile.linkedin} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})}/>
            </div>
            <div className="mt-3">
              <button onClick={handleUpdate} className='btn btn-info w-100'>Update</button>
            </div>
           
            </div>
            </Collapse>

        
  
      </div>

  )
}

export default Profile
