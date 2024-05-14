import Axios from "axios"
import { detailLectureUrl } from "../../../../../../shortPath/urlPath"

export default async function GetLecture(key){
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
            console.log("ERR")
        })
        const dataPromise = await data
        return dataPromise
    }
    catch (err) {
        console.log("ERR")
    }
}