import Axios from "axios"
import { detailUserUrl } from "../../../../../../shortPath/urlPath"

export default async function GetUser(key){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const AccountId = localStorage.getItem("AccountId")
        const data = await Axios({
            method: "GET",
            url: `${detailUserUrl}${AccountId}`,
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