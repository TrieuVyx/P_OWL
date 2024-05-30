
import Axios from "axios";
import { checkTracks } from "../../../../../../../shortPath/urlPath";
import toast from "react-hot-toast";
export default async function CheckUserRegisterCourse() {
    const tokenAccess = localStorage.getItem('AccessToken');
    const CourseID = localStorage.getItem('CourseID');
    const IDUser = localStorage.getItem('IDUser');
    const data = {
        IDCourse: CourseID,
        IDUser: IDUser
    }
    try {
        const response = await Axios({
            method: "POST",
            url: `${checkTracks}`,
            headers: {
                tokenAccess
            },
            data: data
        });
        const dataPromise = await response
        return dataPromise
    } catch (error) {
        toast.error(error + "error");
    }
}