import Axios from "axios"
import { createCourseUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function CreateCourse(CourseData){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${createCourseUrl}`,
            headers: {
               tokenAccess
            },
            data:CourseData
        }).then((res)=>{
            toast.success("Create Success")
        })
        .catch(err => {
            console.log("Error")
        })
    }
    catch (err) {
        console.log("ERR")
    }
}