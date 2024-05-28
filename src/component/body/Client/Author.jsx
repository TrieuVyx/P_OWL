import { IMAGE_USER_ } from "../../../shortPath/path"
import Reach, {useEffect,useState} from "react"
import GetUserAuthor from "./event/get"
export default function Author() {
    const [UserName, setUserName] = useState("")
    useEffect(()=>{
        GetUserAuthor()
            .then((data) => {
                setUserName(data.data.UserName)
            })
            .catch((error) => console.error(error));
    })

    return (
        <>
            <div className="col child_course">
                <div id="userappear">
                    <div className="user_child">
                        <h1>hello {UserName}</h1>
                        <span>very good!</span>
                    </div>
                    <div className="user_child">
                        <img className="user_image" src={IMAGE_USER_} alt=""/>
                    </div>

                </div>
            </div>
            <div className="col child_course">OPP!</div>
        </>

    )
}