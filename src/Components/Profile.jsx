import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);
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
                  <input style={{display:'none'}} type='file'/>
                  <img src="https://vectorified.com/images/business-avatar-icon-8.png" height={'150px'} width={'150px'} alt="upload picture" />
            </label>
            <div className="mt-3">
              <input type="text" className='form-control' placeholder='GitHub' />
            </div>
            <div className="mt-3">
              <input type="text" className='form-control' placeholder='LinkedIn' />
            </div>
            </div>
            </Collapse>

        
  
      </div>

  )
}

export default Profile
