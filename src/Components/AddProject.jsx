import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function AddProject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>Add Project</Button>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                   <label className='text-center'>
                        <input type='file' style={{display:'none'}}/>
                        <img src="https://vectorified.com/images/image-placeholder-icon-8.png" height={'250px'} width={'300px'} alt="image placeholder" />
                   </label>
                </div>
                <div className="col-lg-6">
                    <div className='mb-3'>
                        <input type="text" className='form-control my-2' placeholder='Project Title'/>
                        <input type="text" className='form-control my-2' placeholder='Languages Used'/>
                        <input type="text" className='form-control my-2' placeholder='Github Link'/>
                        <input type="text" className='form-control my-2' placeholder='Website Link'/>
                    </div>
                </div>
            </div>
            <div className='my-2'><input type="text" className='form-control my-2' placeholder='Project Overview'/></div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
