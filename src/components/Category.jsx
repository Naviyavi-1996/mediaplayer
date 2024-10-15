import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Videocard from './Videocard';
import { AddCategoryApi, addvideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';
function Category({videoStatus}) {
  const [show, setShow] = useState(false);
  const[allCategory,setallCategory]=useState([])
  const[AddCategoryStatus,setAddCategoryStatus]=useState({})
  const[DeleteCategoryStatus,setDeleteCategoryStatus]=useState({})
  const[videoCategoryStatus,setVideoCategoryStatus]=useState({})
  const handleClose = () =>{ setShow(false); handleCancel()}
  const handleCancel=()=>{
    setcategoryName("")
   }
  const handleShow = () => setShow(true);
  const [categoryName,setcategoryName]=useState("")
  console.log(categoryName)
  const handleAdd = async()=>
  {
    if(categoryName){
      const reqBody={
        category: categoryName,
        allVideos:[]
      }
      const result =await AddCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300)
      {
        toast.success("category added successfully")
        handleClose()
        setAddCategoryStatus(result.data)
      }
      else
      {
        toast.error("something went wrong");
        handleClose()
      }
    }
    else{
      toast.info("please add a category name")
    }
  }
  const getCategory=async()=>
  {
    const result=await getAllCategoryApi()
    setallCategory(result.data)
  }
  const handleDelete=async(id)=>
  {
    const result=await deleteCategoryApi(id)
    console.log(result)
    if(result.status>=200 && result.status<300)
    {
    setDeleteCategoryStatus(result.data) 
    }
   
  }

  const ondrag=(e)=>{
    e.preventDefault()//prevents the data lose or restrict the refresh
  }
  const  videoDrop=async (e,categoryDetails)=>{
    console.log(categoryDetails);
    console.log(e.dataTransfer.getData("videoDetails"));
    
    const videoDetails =JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails)
    if(categoryDetails.allVideos.find((item)=>item.id==videoDetails.id)){
      toast.error("video already present in the category")
    }
    else{
      categoryDetails.allVideos.push(videoDetails)
      console.log(categoryDetails);
      const result = await addvideoToCategoryApi(categoryDetails.id,categoryDetails)
    if(result.status >=200 && result.status <300)
      {
        toast.success("video added")
        setVideoCategoryStatus(result.data)
      } 
      else{
        toast.error("something went wrong")
      }
    }
   
  }
  const videoDrag=(e,video,category)=>{
    console.log(video);
    console.log(category);

    const dataShare={
      category,
      video
    }
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }
  
  /* const result = await addvideoToCategoryApi(categoryDetails.id) */
  useEffect(()=>{getCategory()},[AddCategoryStatus,DeleteCategoryStatus,videoCategoryStatus,videoStatus])
  return (
    <>
    <h4>Category</h4>
    <button className='btn btn-warning mt-4 w-100'onClick={handleShow}>Add Category</button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <div className='p-3 border border-secondary border-2 rounded'>
              <input type="text" className='form-control'placeholder='Category name' value={categoryName} onChange={(e)=>setcategoryName(e.target.value)}/>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
           Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
 {   allCategory?.length>0 &&

   allCategory.map((item)=>(<div className='border border-seconday border-2 p-3 rounded mt-5'droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>videoDrop(e,item)}>
    <div className='d-flex justify-content-between mb-3'>
      <h5>{item?.category}</h5>
      <button className='btn btn-danger'onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></button>
    </div>
    {item?.allVideos?.length>0 &&
    item?.allVideos?.map((video)=>(
       <div draggable onDragStart={(e)=>videoDrag(e,video,item)}> 
      <Videocard video={video} isPresent={true}/>
     </div>))}
  
      </div>))
   }
    </>
  )
}

export default Category