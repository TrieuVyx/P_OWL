import Axios from "axios"
import { detailCourseUrl } from "../../../../../shortPath/urlPath"
export default async function getCourse(IDCourse){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const data = await Axios({
            method: "GET",
            url: `${detailCourseUrl}${IDCourse}`,
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