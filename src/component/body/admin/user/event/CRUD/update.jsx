import Axios from "axios"
import { updateUserUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function UpdateUser(UserData){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${updateUserUrl}${UserData.AccountId}`,
            headers: {
               tokenAccess
            },
            data:UserData
        }).then((res)=>{
            toast.success("Update Success")
        })
        .catch(err => {
            console.log("Error")
        })
    }
    catch (err) {
        console.log("ERR")
    }
}