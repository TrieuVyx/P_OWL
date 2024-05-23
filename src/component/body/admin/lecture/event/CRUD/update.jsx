import Axios from "axios"
import { updateLectureUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function UpdateLecture(LectureData){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${updateLectureUrl}${LectureData.LectureID}`,
            headers: {
               tokenAccess
            },
            data:LectureData
        }).then((res)=>{
            toast.success("Update Success")
        })
        .catch(err => {
            toast.error("Update Failure, Size Limited < 12MB")
        })
    }
    catch (err) {
        toast.error("Update Failure, Size Limited < 12MB")
    }
}