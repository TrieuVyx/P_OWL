import { getListLectureInCourseNoPageSizeUrl } from "../../../../../../../shortPath/urlPath"
import toast from "react-hot-toast"
import Axios from "axios"
import { detailLectureUrl } from "../../../../../../../shortPath/urlPath"
export default async function getLecture() {
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const LectureID = localStorage.getItem("LectureID")
        const data = await Axios({
            method: "GET",
            url: `${detailLectureUrl}${LectureID}`,
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