import axios from "axios";

export const commonApi=async(httpmethod,url,reqBody)=>
{
    const reqconfig={
        method:httpmethod,
        url,
        data:reqBody,
        headers:{"Content-Type":"application/json"}
    }
    return await axios(reqconfig).then((result)=>{
        return result
    }).catch((error)=>{return error})
}