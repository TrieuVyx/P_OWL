import Axios from "axios"
import { deleteUserUrl } from "../../../../../../shortPath/urlPath"
import {toast} from "react-hot-toast"
export default async function DeleteUser(){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const AccountId = localStorage.getItem("AccountId")
        await Axios({
            method: "POST",
            url: `${deleteUserUrl}${AccountId}`,
            headers: {
               tokenAccess
            }
        }).then((res)=>{
            toast.success("Delete Success")
            // #region XEM CHỖ NÀY CHUYỂN KHÔNG LOAD
        })
        .catch(err => {
            console.log("Error")
        })
    }
    catch (err) {
        console.log("ERR")
    }
}