import { getListLectureInCourseNoPageSizeUrl } from "../../../../../../../shortPath/urlPath"
import toast from "react-hot-toast"
import Axios from "axios"
export default async function getLecture() {
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const CourseID = localStorage.getItem("CourseID")
        const data = await Axios({
            method: "GET",
            url: `${getListLectureInCourseNoPageSizeUrl}${CourseID}`,
            headers: {
                tokenAccess
            }
        }).catch(err => {
            toast.error("Not Found Lecture")
        })
        const dataPromise = await data
        
        return dataPromise
    }
    catch (err) {
        toast.error("ERR")
    }
}