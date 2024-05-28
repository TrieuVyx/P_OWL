import Axios from "axios"
import { searchCourseUrl } from "../../../../shortPath/urlPath"
import toast from "react-hot-toast"
export default async function SearchCourse() {
    const tokenAccess = localStorage.getItem("AccessToken")
    const CourseName = localStorage.getItem("SearchReq")
    const response = await Axios({
        method: "POST",
        url: `${searchCourseUrl}`,
        headers:{
            tokenAccess
        }, 
        data: {
            CourseName
        }
    }).catch(err => {
        toast.error("Course Is Not Found, Please Try again!! ")
    })
    const dataPromise = await response
    return dataPromise
}
