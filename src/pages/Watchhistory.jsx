import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllHistoryVideosApi } from '../services/allApi'
function Watchhistory() {
  const[allHisVideos,setallHisVideo]=useState([])
  const[deletestatus,setDeleteStatus]=useState(false)
  const getAllHistoryVideos=async()=>
  {
    const result=await getAllHistoryVideosApi()
    console.log(result.data)
    setallHisVideo(result.data)
  }
  const handleDelete=async(id)=>{
    const result=await deleteHistoryVideoApi(id)
    console.log(result);
    if(result.status>=200&&result.status<300)
      {setDeleteStatus(true)}
  }
  useEffect(()=>{
    getAllHistoryVideos(),
    setDeleteStatus(false)},[deletestatus])
  return (
  <div className='p-4'>
        <div className='d-flex mt-5'>
          <h4>Watch History</h4>
          <Link to={'/Home'} style={{textDecoration:"none"}}className='ms-auto'><h4><FontAwesomeIcon icon={faHouse} className='me-2'/><span className='d-none d-md-inline'>Back Home</span></h4></Link>
        </div>
        <div className="container-fluid">
  <div className='row w-100'>
<div className='col-md-1'></div>
       <div className='col-md-10 p-3 table-responsive'>
{allHisVideos?.length>0?         
  <table className='table mt-5'>
            <thead>
              <tr>
                <th>SL.NO</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allHisVideos?.map((item,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td>{item?.url}</td>
                <td>{item?.time}</td>
                <td><button className='btn btn-danger'onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
              </tr>))
              }
            </tbody>
          </table>
          :
          <h4>No watch History</h4>
          }
       </div>
       <h3 className='text-warning text-center'>No Watch History</h3>
<div className='col-md-1'></div>
  </div>
</div>
  </div>
  )
}

export default Watchhistory