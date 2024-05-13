import Axios from "axios"
import { createUserUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function CreateUser(UserData){
    try {
        console.log(UserData)
        const tokenAccess = localStorage.getItem("AccessToken")
        await Axios({
            method: "POST",
            url: `${createUserUrl}`,
            headers: {
               tokenAccess
            },
            data:UserData
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