import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";
//add videos
export const AddVideoApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
//get all videos
export const getVideosApi=async()=>{
    return await commonApi('GET',`${serverUrl}/videos`)
}
//add video history
export const AddVideoHistoryApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}
//api to get video from history
export const getAllHistoryVideosApi=async()=>{
    return await commonApi('GET',`${serverUrl}/history`)
}
//api to delete video from allvideos
export const deleteVideoApi=async(id)=>
{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}
//api to delete video from history
export const deleteHistoryVideoApi=async(id)=>
{
        return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}
// api to add category
export const AddCategoryApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}
//api to get category
export const getAllCategoryApi=async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}
//api to delete category
export const deleteCategoryApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}
//api to add video details to a caregory
export const addvideoToCategoryApi=async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}