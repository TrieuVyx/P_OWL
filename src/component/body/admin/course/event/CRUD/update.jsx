import Axios from "axios"
import { updateCourseUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function UpdateCourse(CourseData){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${updateCourseUrl}${CourseData.CourseID}`,
            headers: {
               tokenAccess
            },
            data:CourseData
        }).then((res)=>{
            toast.success("Update Success")
        })
        .catch(err => {
            console.log("Error" )
        })
    }
    catch (err) {
        console.log("ERR")
    }
}