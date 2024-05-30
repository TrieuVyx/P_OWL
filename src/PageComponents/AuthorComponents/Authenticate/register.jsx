import Axios from "axios"
import CheckError from "./checkError";
import { registerUrl } from "../../../shortPath/urlPath";
import toast from "react-hot-toast";
export default async function RegisterAccount(UserName,Email, PassWord) {
    try {
        const data = { UserName:UserName,Email: Email, PassWord: PassWord }
        await Axios({
            method: "POST",
            url: registerUrl,
            data: data
        })
            .then((response) => {
             toast.success("create account successfully")
            })
            .catch((error) => {
                CheckError(Email, PassWord)
                toast.error("create account failure")
            });
    }
    catch (err) {
        toast.error("create account failure")
    }
}

