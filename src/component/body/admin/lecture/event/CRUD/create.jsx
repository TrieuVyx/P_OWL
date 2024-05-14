import Axios from "axios"
import { createLectureUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function CreateLecture(LectureData){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${ createLectureUrl}`,
            headers: {
               tokenAccess
            },
            data:LectureData
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