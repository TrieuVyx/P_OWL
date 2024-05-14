import Axios from "axios"
import { deleteCourseUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function DeleteCourse(){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const CourseID = localStorage.getItem("CourseID")
        await Axios({
            method: "POST",
            url: `${deleteCourseUrl}${CourseID}`,
            headers: {
               tokenAccess
            }
        }).then((res)=>{
            toast.success("Delete Success")
            // #region XEM CHỖ NÀY CHUYỂN KHÔNG LOAD
        })
        .catch(err => {
            console.log("Error")
        })
    }
    catch (err) {
        console.log("ERR")
    }
}