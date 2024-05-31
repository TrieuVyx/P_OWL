import { getListLectureInCourseNoPageSizeUrl } from "../../../../../../../shortPath/urlPath"
import toast from "react-hot-toast"
import Axios from "axios"
import { createCommentLectureUrl } from "../../../../../../../shortPath/urlPath"
export default async function createCommentLecture(commentText) {
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const IDLecture = localStorage.getItem("LectureID")
        const IDUser = localStorage.getItem("IDUser")
        const data = {
            IDUser: IDUser,
            IDLecture: IDLecture,
            Content: commentText
          }
        const response = await Axios({
            method: "POST",
            url: `${createCommentLectureUrl}`,
            headers: {
                tokenAccess
            },
            data:data
        }).catch(err => {
            toast.error("Not Found ")
        })
        if(response.status == 200){
            toast.success("Posted")
        }
        // const dataPromise = await data
        // return dataPromise
    }
    catch (err) {
        toast.error("ERR")
    }
}