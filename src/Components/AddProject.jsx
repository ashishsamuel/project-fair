import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';

function AddProject() {
  const[projectDetails,setProjectDetails] = useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })
  const [token,setToken] = useState("")
  const [preview,setPreview] = useState("")
    const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setProjectDetails({title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
    setPreview("")
  }
  const handleShow = () => setShow(true);
  console.log(projectDetails);

  useEffect(()=>{
    if(projectDetails.projectImage){
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  },[projectDetails.projectImage])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else{
      setToken("")
    }
  },[])

  const handleAdd = async(e)=>{
    e.preventDefault();
    const {title,languages,overview,github,website,projectImage} = projectDetails
    if(!title || !languages || !overview || !projectImage || !github || !website){
      toast.info("Please fill the completely!!!")
    }else{
      const reqBody = new FormData()
      FormData.append("title",title)
      FormData.append("languages",languages)
      FormData.append("overview",overview)
      FormData.append("projectImage",projectImage)
      FormData.append("github",github)
      FormData.append("website",website)

      if(token){
        reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result = await addProjectAPI(reqBody,reqHeader)
      if(result.status === 200){
        console.log(result.data);        
      }else{
        console.log(result);
        console.log(result.response.data);
      }
      }

      
    }
  }

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
                        <input type='file' style={{display:'none'}} onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                        <img src={preview ? preview : "https://vectorified.com/images/image-placeholder-icon-8.png"} height={'250px'} width={'300px'} alt="image placeholder"/>
                   </label>
                </div>
                <div className="col-lg-6">
                    <div className='mb-3'>
                        <input type="text" className='form-control my-2' placeholder='Project Title' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                        <input type="text" className='form-control my-2' placeholder='Languages Used' value={projectDetails.languages} onChange={(e)=>setProjectDetails({...projectDetails,languages:e.target.value})}/>
                        <input type="text" className='form-control my-2' placeholder='Github Link' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>
                        <input type="text" className='form-control my-2' placeholder='Website Link' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>
                    </div>
                </div>
            </div>
            <div className='my-2'><input type="text" className='form-control my-2' placeholder='Project Overview' value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}/></div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
