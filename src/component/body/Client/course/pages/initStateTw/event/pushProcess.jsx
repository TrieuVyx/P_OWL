import toast from "react-hot-toast"
import Axios from "axios"
import { pushProcessingUrl } from "../../../../../../../shortPath/urlPath"
export default async function pushProcess(){
    try{
        const IDUser = localStorage.getItem('IDUser')
        const IDCourse = localStorage.getItem('CourseID')

        const data = {
            IDUser:IDUser,
            IDCourse:IDCourse,
            progress: 20
        }
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${pushProcessingUrl}`,
            headers: {
               tokenAccess
            },
            data:data
        }).then((res)=>{
            toast.success("congratulations successfully")
        })
        .catch(err => {
            toast.error("Error")
        })
    }
    catch(err){
        
    }
}