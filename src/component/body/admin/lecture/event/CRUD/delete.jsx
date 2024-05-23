import Axios from "axios"
import { deleteLectureUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function DeleteLecture(){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const LectureID = localStorage.getItem("LectureID")
        await Axios({
            method: "POST",
            url: `${deleteLectureUrl}${LectureID}`,
            headers: {
               tokenAccess
            }
        }).then((res)=>{
            toast.success("Delete Success")
            // #region XEM CHỖ NÀY CHUYỂN KHÔNG LOAD
        })
        .catch(err => {
            toast.error("Delete failure")
        })
    }
    catch (err) {
        toast.error("Delete failure")

    }
}