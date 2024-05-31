import { getListLectureInCourseNoPageSizeUrl } from "../../../../../../../shortPath/urlPath"
import toast from "react-hot-toast"
import Axios from "axios"
import { getListCommentLectureUrl } from "../../../../../../../shortPath/urlPath"
export default async function getCommentLecture() {
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const IDLecture = localStorage.getItem("LectureID")
        const data = await Axios({
            method: "GET",
            url: `${getListCommentLectureUrl}${IDLecture}`,
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