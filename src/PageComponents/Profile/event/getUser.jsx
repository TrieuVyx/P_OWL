import { detailUserUrl } from "../../../shortPath/urlPath"
import toast from "react-hot-toast"
import Axios from'axios'
export default async function getUser() {
    const tokenAccess = localStorage.getItem("AccessToken")
    const IDUser = localStorage.getItem("IDUser")

    const data = await Axios({
        method: "GET",
        url: `${detailUserUrl}${IDUser}`,
        headers: {
            tokenAccess
        }
    }).catch(err => {
        toast.log("ERR")
    })
    const dataPromise = await data
    return dataPromise

}