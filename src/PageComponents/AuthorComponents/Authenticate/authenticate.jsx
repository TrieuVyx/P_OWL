import Axios from "axios"
import CheckError from "./checkError";
import { loginUrl } from "../../../shortPath/urlPath";
import { LinkRouter } from '../../../shortPath/path';


export default async function Authenticate(Email, PassWord) {
    try {
        const data = { Email: Email, PassWord: PassWord }
        await Axios({
            method: "POST",
            url: loginUrl,
            data: data
        })
            .then((response) => {
                const Token = response.data.AccessToken
                const RefreshToken = response.data.FreshToken
                const Hierachy = response.data.Hierachy
                localStorage.setItem("AccessToken", Token)
                localStorage.setItem("FreshToken", RefreshToken)
                localStorage.setItem("Hierachy", Hierachy)
                window.location = LinkRouter.HOME
            })
            .catch((error) => {
                CheckError(Email, PassWord)
                console.log({ message: error.message });
            });
    }
    catch (err) {
        console.log("ERR")
    }


}

