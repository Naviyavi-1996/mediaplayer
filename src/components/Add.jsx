import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddVideoStatus}) {
    const [videoDetails,setvideodetails]=useState({
        caption:"",
        imageUrl:"",
        embedLink:""
    })

    const handleCancel=()=>
    {
        setvideodetails({
            caption:"",
            imageUrl:"",
            embedLink:""
        })
    }
    const handleAdd=async()=>
    {
        const{caption,imageUrl,embedLink}=videoDetails
        if(!caption||!imageUrl||!embedLink)
        {
            toast.info('Please fill the form completely')
        }
        else{
        if(videoDetails.embedLink.startsWith("https://youtube.be/"))
            {
              const embed =`https://www.youtube.com/embed/${videoDetails.embedLink.slice(17,28)}`
              
             const result=await AddVideoApi({...videoDetails,embedLink:embed})
              console.log(result);
              if(result.status>=200 && result.status<300)
              {
                toast.success("Video uploaded successfully")
                handleClose()
                setAddVideoStatus(result.data)
              }
              else
              {
                toast.error("Something went wrong")
                handleClose()
              }
            }
            else
            {
                const embed =`https://www.youtube.com/embed/${videoDetails.embedLink.slice(-11)}`
                const result=await AddVideoApi({...videoDetails,embedLink:embed})
                console.log(result);   
                if(result.status>=200 && result.status<300)
                    {
                      toast.success("Video uploaded successfully")
                      handleClose()
                      setAddVideoStatus(result.data)
                    }
                    else
                    {
                      toast.error("Something went wrong")
                      handleClose()
                    }
            }
        }
    }
    const [show, setShow] = useState(false);

    console.log(videoDetails);
    
    const handleClose = () => {setShow(false);handleCancel()};
    const handleShow = () => setShow(true);
   

    return (
        <>
            <div className='d-flex align-items-center'>
                <span className='d-none d-md-inline'><h5>Upload new vedio</h5></span>
                <button className="btn pb-3"onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5'/></button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm}/>Upload Vedios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                       <h6>Please fill the following details</h6>
                       <form className="p-3 mt-3 border border-dark rounded"action="">
                        <div className='mb-3'>
                            <input type="text" placeholder='vedio caption' id="caption" className='form-control'onChange={(e)=>setvideodetails({...videoDetails,caption:e.target.value})}/>
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='vedio Image'id="image" className='form-control'onChange={(e)=>setvideodetails({...videoDetails,imageUrl:e.target.value})}/>
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='vedio Url' id="video" className='form-control'onChange={(e)=>setvideodetails({...videoDetails,embedLink:e.target.value})}/>
                        </div>
                       </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="Warning" onClick={handleAdd}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' autoclose={2000} theme="colored"/>
        </>
    )
}


export default Add