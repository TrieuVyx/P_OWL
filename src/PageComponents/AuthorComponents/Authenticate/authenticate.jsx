import Axios from "axios"
import { useNavigation } from 'react-router-dom';
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
                console.log(response)
                const Token = response.data.AccessToken
                const RefreshToken = response.data.FreshToken
                localStorage.setItem("AccessToken", Token)
                localStorage.setItem("FreshToken", RefreshToken)
                routerMap()
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

const routerMap = () => {
    const router = useNavigation()
    router(LinkRouter.HOME)
}