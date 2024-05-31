import { getListLectureInCourseNoPageSizeUrl } from "../../../../../../../shortPath/urlPath"
import toast from "react-hot-toast"
import Axios from "axios"
import { getListCommentUrl } from "../../../../../../../shortPath/urlPath"
export default async function getComment() {
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const CourseID = localStorage.getItem("CourseID")
        const data = await Axios({
            method: "GET",
            url: `${getListCommentUrl}${CourseID}`,
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