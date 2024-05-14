import Axios from "axios"
import { getUserUrl } from "../../../../shortPath/urlPath"
export default async function GetUserAuthor(){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const UserName = localStorage.getItem("UserName")
        const data = await Axios({
            method: "GET",
            url: `${getUserUrl}${UserName}`,
            headers: {
               tokenAccess
            },
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