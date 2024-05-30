import { getListLectureInCourseNoPageSizeUrl } from "../../../../../../../shortPath/urlPath"
import toast from "react-hot-toast"
import Axios from "axios"
 import { createCommentUrl } from "../../../../../../../shortPath/urlPath"
export default async function createComment(commentText) {
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const CourseID = localStorage.getItem("CourseID")
        const IDUser = localStorage.getItem("IDUser")
        const data = {
            IDUser: IDUser,
            IDCourse: CourseID,
            Content: commentText
          }
        const response = await Axios({
            method: "POST",
            url: `${createCommentUrl}`,
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