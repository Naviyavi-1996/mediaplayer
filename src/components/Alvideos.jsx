import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addvideoToCategoryApi, getVideosApi } from '../services/allApi'
function Alvideos({addVideoStatus,setVideoStatus}) {
    const[allVideos , setAllVideos]=useState([])
    const[deleteVideoStatus, setDeleteVideoStatus]=useState([])
    /* side effect */
    const getAllVideo=async()=>{
        const result=await getVideosApi()
        setAllVideos(result.data)
    }
    console.log(allVideos);

    const ondrop=(e)=>
        {
            e.preventDefault()
        }
        const VideoDrop=async(e)=>
        {
            const {category,video}=JSON.parse(e.dataTransfer.getData("dataShare"))
            console.log(category,video);

            const newArray=category.allVideos.filter((item)=>item.id!=video.id)
            const newCategory={
                category:category.category,
                allVideos:newArray,
                id:category.id
            }
            const result=await addvideoToCategoryApi(category.id,newCategory)
            console.log(result);
            if(result.status>=200 && result.status<300)
            {
                setVideoStatus(result.data)
            }

        }
    /* to handle sideeffect */
    useEffect(()=>
    {getAllVideo()},[addVideoStatus,deleteVideoStatus]) /*[]-useEffect is called when the component render to the browser*/ 
  return (
<div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
    <h4>All Videos</h4>
    {/* added videos */}
    {allVideos.length>0?
        <div className="container">
            <div className="row">
              {  allVideos.map((item)=>(
                <div className="col-md-3 p-2">
                    <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
                </div>
                ))
            }
            </div>
        </div>
        :
    
        
<div className="container">
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <img src="https://live-mmb-public.s3.ap-south-1.amazonaws.com/assets/img/empty-cart.png" alt="no image"className='w-100' />
            <h5 className='text-warning text-center'>No videos added yet</h5>
        </div>
        <div className="col-md-4"></div>
    </div>
</div>}
</div>
  )
}

export default Alvideos