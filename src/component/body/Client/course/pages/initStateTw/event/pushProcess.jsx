import toast from "react-hot-toast"
import Axios from "axios"
import { pushProcessingUrl } from "../../../../../../../shortPath/urlPath"
export default async function pushProcess(){
    try{
        
        const data = {
            
            progress: 20
        }
        const IDUser = localStorage.getItem('IDUser')
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${pushProcessingUrl}${IDUser}`,
            headers: {
               tokenAccess
            },
            data:data
        }).then((res)=>{
            console.log(res)
            toast.success("congratulations successfully")
        })
        .catch(err => {
            toast.error("Error")
        })
    }
    catch(err){
        
    }
}