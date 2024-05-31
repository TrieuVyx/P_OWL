import toast from "react-hot-toast"
import Axios from'axios'
import { checkProcessingUrl } from "../../../shortPath/urlPath"
export default async function getProcesing(){
    const tokenAccess = localStorage.getItem("AccessToken")
    const IDUser = localStorage.getItem("IDUser")

    const data = await Axios({
        method: "POST",
        url: `${checkProcessingUrl}${IDUser}`,
        headers: {
            tokenAccess
        }
    }).catch(err => {
        toast.log("ERR")
    })
    const dataPromise = await data
    return dataPromise
}